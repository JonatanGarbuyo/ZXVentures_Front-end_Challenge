import { ChangeEvent, useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'

import ProductCard from '../components/ProductCard'
import ProductsFilter from '../components/ProductsFilter'
import { Heading } from '../components/styles/Heading.styled'
import { ProductsContent } from '../components/styles/ProductsContent.styled'
import { ProductItem } from '../types'
import { ProductsList } from '../components/styles/ProductsList.styled'
import Recommended from '../components/Recommended'
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
  recommendedProducts: ProductItem[]
}

const Index: NextPage = ({ products, recommendedProducts }: props) => {
  const [displayProducts, setDisplayProducts] = useState(products)

  function handleSelectCategory(e: ChangeEvent<HTMLSelectElement>) {
    const selectedCategory = e.target.value

    selectedCategory === 'todos' ? setDisplayProducts(products) :
    setDisplayProducts(products.filter(product => product.categories?.some(category=> category === selectedCategory)))
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
          <ProductsList>
            {displayProducts &&
              displayProducts.map((product) => (
                <ProductCard
                  key={product.product_id}
                  product={product}
                  imageSize="medium"
                />
              ))}
          </ProductsList>
        </ProductsContent>

        <Recommended recommendedProducts={recommendedProducts} />
      </Main>
    </>
  )
}

export default Index

export async function getServerSideProps() {
  const products = await getAllProducts()
  const recommendedProducts = await getProductsByCategory('mas vendidos')

  if (!products) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      products,
      recommendedProducts,
    },
  }
}
