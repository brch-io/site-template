resource "aws_iam_role" "iam_for_lambda" {
  name = "iam_for_lambda"

  assume_role_policy = file("policies/redirect.json.tpl")
}

data "archive_file" "lambda_code" {
  type        = "zip"
  source_dir = "lambda/redirect/"
  output_file_mode = "0666"
  output_path = "lambda/redirect/dist/redirect.zip"
}

resource "aws_lambda_function" "redirect_lambda" {
  filename         = data.archive_file.lambda_code.output_path
  function_name    = "CloudFrontRedirect"
  role             = aws_iam_role.iam_for_lambda.arn
  handler          = "index.handler"
  source_code_hash = filebase64sha256(data.archive_file.lambda_code.output_path)
  publish          = true
  runtime          = "nodejs12.x"
}

resource "aws_lambda_permission" "allow_cloudfront" {
  statement_id  = "AllowExecutionFromCloudFront"
  action        = "lambda:GetFunction"
  function_name = aws_lambda_function.redirect_lambda.function_name
  principal     = "edgelambda.amazonaws.com"
}