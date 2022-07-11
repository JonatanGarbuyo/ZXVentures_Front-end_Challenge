import type { NextPage } from 'next'
import Head from 'next/head'

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <title>Front-end Challenge</title>
        <meta
          content="Build a product list with a sample database of products (real products!) we use here in Siempre en Casa."
          name="description"
        />
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <main style={{ flexGrow: 1 }}>main</main>
    </>
  )
}

export default Index
