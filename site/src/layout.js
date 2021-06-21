/** @jsx jsx */
import { jsx, Container } from "theme-ui"

export default (props) => (
    <div
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        variant: 'layout.root',
      }}>
      <header
        sx={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          variant: 'layout.header',
        }}>
        <Container p={4}>
          Header content
        </Container>
      </header>
      <main
        sx={{
          width: '100%',
          flex: '1 1 auto',
          variant: 'layout.main',
        }}>
        <div
          sx={{
            maxWidth: 1024,
            mx: 'auto',
            px: 3,
            variant: 'layout.container',
          }}>
          {props.children}
        </div>
      </main>
      <footer
        sx={{
          width: '100%',
          variant: 'layout.footer',
        }}>
        <Container p={4}>
          Footer content
        </Container>
      </footer>
    </div>
  )