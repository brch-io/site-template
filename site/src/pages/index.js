import * as React from "react"
import { Flex, Box, Container, Heading, Paragraph, Grid } from 'theme-ui'
import Layout from '../layout'

const IndexPage = () => {
  return (
    <Layout>
      <Container p={4}>
        <Heading>This is a heading</Heading>
        <Heading as='h3'>Subhead</Heading>
        <Flex>
          <Box p={2} bg="primary" sx={{ flex: '1 1 auto' }}>
            Flex
          </Box>
          <Box p={2} bg="muted">
            Box
          </Box>
        </Flex>
        <Grid gap={2} columns={[2, null, 4]}>
          <Box bg="primary">Box</Box>
          <Box bg="muted">Box</Box>
          <Box bg="primary">Box</Box>
          <Box bg="muted">Box</Box>
        </Grid>
        <Box>
          <Paragraph>Hello World!</Paragraph>
          <Paragraph variant="block">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nunc elit,
            feugiat ut velit eget, pellentesque accumsan libero. Duis interdum ante sed
            ipsum imperdiet congue nec non mauris. Quisque ac ultricies nunc. Sed nisi
            diam, suscipit eu laoreet a, bibendum nec mauris. Aliquam tristique rhoncus
            ipsum scelerisque egestas. Maecenas rhoncus malesuada mauris, vel porta ex
            tincidunt non. Duis ac sapien in felis fermentum tristique. Nam a erat
            faucibus, varius magna ac, interdum tortor. Aenean quis varius mi, nec
            molestie neque. In dignissim diam in velit pharetra cursus. Integer gravida,
            arcu non sagittis iaculis, justo leo facilisis augue, consequat mollis risus
            erat quis velit. In turpis nibh, ornare ut facilisis id, dignissim non enim.
            Fusce maximus elit sit amet dolor aliquet, et tristique elit eleifend. Aenean
            ornare tortor sem, at sollicitudin ipsum scelerisque a.
          </Paragraph>
          <Paragraph as="small" sx={{ fontStyle: 'italic' }}>Something a bit less important</Paragraph>
        </Box>
      </Container>
    </Layout>
  )
}

export default IndexPage
