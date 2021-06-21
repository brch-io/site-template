# Site template
This repo is a github template for creation of Gatsby sites configured through terraform and deployed to AWS through github actions.

## Key branches 
`main` - the production brach -  this is deployed to prod env
`dev` - development branch - this is deployed to dev env

## Folders 

`site` - the website folder
`functions` - supporting lambda functions (via serverless) 
`terraform` - deployment tooling

## For development

### Dependencies 

`npm install -g yarn`

### Setup locally
`cd site`
`yarn`

### local development

`yarn develop`
View the site at `http://localhost:8000`
Also the style-guide at `http://localhost:8000/style-guide`

## For deploy
### AWS setup
`brew install awscli` to install the AWS CLI   

`aws configure` to configure and add in the keys for programatic AWS access

### Terraform setup
`brew tap hashicorp/tap` to install hashicorp brew files
`brew instnall terraform` to install terraform

`terraform --version` to make sure it's installed properly and works

`cd terraform`

Files: 
`locals.tf` - this is where your configuration variables go to use throughout the TF files
`provider.tf` - provider specific configuration (AWS default)

#### Setup terraform
`terraform init` 

