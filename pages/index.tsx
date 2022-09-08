import { ChangeEvent, useEffect, useState } from 'react'
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

const categories = [
  'todos',
  'aguas',
  'vinos',
  'cervezas',
  'gaseosas',
  'mas vendidos',
]

const Index: NextPage = () => {
  const [products, setProducts] = useState<ProductItem[] | null>(null)
  const [recomendedProducts, setRecomendedProducts] = useState<ProductItem[] | null>(null)

  async function getProductsByCategory(category: String) {
    const response = await fetch(
      `https://zxventures-api.herokuapp.com/products?categories_like=${category}`
    )

    return response.json() as Promise<ProductItem[]>
  }

  async function getAllProducts() {
    const response = await fetch(
      `https://zxventures-api.herokuapp.com/products`
    ) 

    return response.json() as Promise<ProductItem[]>
  }

  useEffect(() => {
    try {
       getAllProducts().then(setProducts)
       getProductsByCategory('mas vendidos').then(setRecomendedProducts)
      } catch (error) {
        alert(error)        
      }
  }, [])

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
              {products && products.map((product) => (
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
