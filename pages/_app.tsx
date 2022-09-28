import type { AppProps } from 'next/app'

import Layout from '../components/Layout'

import ShoppingCartProvider from 'context/shoppingCartProvider'

import '../styles/globals.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ShoppingCartProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ShoppingCartProvider>
  )
}
