import type { NextPage } from 'next'
import Head from 'next/head'
import { ChangeEvent } from 'react'

import ProductsFilter from '../components/ProductsFilter'
import { Heading } from '../components/styles/Heading.styled'
import { ProductsContent } from '../components/styles/ProductsContent.styled'
import { ProductsHeader } from '../components/styles/ProductsHeader.styled'

const categories = [
  'todos',
  'aguas',
  'vinos',
  'cervezas',
  'gaseosas',
  'mas vendidos',
]

const Index: NextPage = () => {
  function handleSelectCategory(e: ChangeEvent<HTMLSelectElement>) {
    console.log(e.target.value)
  }

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

      <main>
        <ProductsHeader>
          <Heading>Productos</Heading>
        </ProductsHeader>
        <ProductsContent>
          <ProductsFilter
            categories={categories}
            onChange={handleSelectCategory}
          />
          {
            // <SortBy>sort</SortBy>
            // <ProductsListing>
            //   {products.map((product) => (
            //     <ProductCard>{product}</ProductCard>
            //   ))}
            // </ProductsListing>
            // <Pagination />
          }
        </ProductsContent>
      </main>
    </>
  )
}

export default Index
