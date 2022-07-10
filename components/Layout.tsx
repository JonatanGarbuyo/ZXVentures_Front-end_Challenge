import Header from '../components/Header'
import { Container } from '../components/styles/Container.styled'

export default function Layout({ children }) {
  return (
    <Container>
      <Header />
      {children}
      <footer>footer</footer>
    </Container>
  )
}
