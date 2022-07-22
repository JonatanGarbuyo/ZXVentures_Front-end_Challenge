import Header from '../components/Header'
import { Container } from '../components/styles/Container.styled'

import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <Container>
      <Header />
      {children}
      <Footer />
    </Container>
  )
}
