import { ChangeEvent } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'

import ProductCard from '../components/ProductCard'
import ProductsFilter from '../components/ProductsFilter'
import { Heading } from '../components/styles/Heading.styled'
import { ProductsContent } from '../components/styles/ProductsContent.styled'
import { ProductItem } from '../types'
import { ProductsList } from '../components/styles/ProductsList.styled'
import Recomended from '../components/Recomended'
import { Main } from '../components/styles/Main.styled'

import { getAllProducts, getProductsByCategory } from 'service/products'

const categories = [
  'todos',
  'aguas',
  'vinos',
  'cervezas',
  'gaseosas',
  'mas vendidos',
]

interface props {
  products: ProductItem[]
  recomendedProducts: ProductItem[]
}

const Index: NextPage = ({ products, recomendedProducts }: props) => {
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

      <Main>
        <ProductsContent>
          <Heading>Productos</Heading>
          <ProductsFilter
            categories={categories}
            onChange={handleSelectCategory}
          />
          {
            // <SortBy>sort</SortBy>
          }
          <ProductsList>
            {products &&
              products.map((product) => (
                <ProductCard
                  key={product.product_id}
                  product={product}
                  imageSize="medium"
                />
              ))}
          </ProductsList>
          {
            // <Pagination />
          }
        </ProductsContent>

        <Recomended recomendedProducts={recomendedProducts} />
      </Main>
    </>
  )
}

export default Index

export async function getServerSideProps() {
  const products = await getAllProducts()
  const recomendedProducts = await getProductsByCategory('mas vendidos')

  if (!products) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      products,
      recomendedProducts,
    },
  }
}
