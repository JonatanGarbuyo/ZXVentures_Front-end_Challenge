import type { NextPage } from 'next'
import Head from 'next/head'

import Header from '../components/Header'
import { Container } from '../components/styles/Container.styled'

const Index: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Front-end Challenge</title>
        <meta
          content="Build a product list with a sample database of products (real products!) we use here in Siempre en Casa."
          name="description"
        />
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <Header />

      {/* navigation */}

      <main>main</main>

      <footer>footer</footer>
    </Container>
  )
}

export default Index
