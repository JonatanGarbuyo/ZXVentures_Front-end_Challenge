import React, { ChangeEvent, FormEvent, useContext, useState } from 'react'
import Image from 'next/image'

import { CardButton } from '../../components/styles/CardButton.styled'
import { CardHeading } from '../../components/styles/CardHeading.styled'
import { Heading } from '../../components/styles/Heading.styled'
import { ImageContainer } from '../../components/styles/ImageContainer.styled'
import { ProductContainer } from '../../components/ProductContainer.styled'
import Recommended from '../../components/Recommended'
import { Main } from '../../components/styles/Main.styled'
import { StyledInput } from '../../components/styles/Input.styled'

import { getProductById, getRecommendedProducts } from 'service/products'
import { CartItem, ProductItem } from 'types'
import ShoppingCartContext from 'context/shoppingCartContext'


interface props{
  product: ProductItem, 
  recommendedProducts: ProductItem[]
}

export default function ProductPage({ product, recommendedProducts }: props) {
  const { incrementQty } = useContext(ShoppingCartContext)
  const [quantity, setQuantity] = useState('1')

  function handleOnChange(e: ChangeEvent<HTMLInputElement>) {
    const qty = e.target.value
    
    if (parseInt(qty) > 100) {
      alert('100 items max')

      return
    }
    if (!qty || parseInt(qty) < 0) return

    setQuantity(qty)
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // validate()

    incrementQty(product as CartItem, quantity)
  }

  return (
    <Main>
      <ProductContainer>
        <div>
          <Heading size="2rem">{product?.name}</Heading>
          <ImageContainer size="large">
            {product && (
              <Image
                src={product.image_url}
                height={480}
                width={480}
                alt={product.name}
              />
            )}
          </ImageContainer>
        </div>
        <div>
          <CardHeading as="h2" color="var(--color-brand-gray)" size="1.5rem">
            {product?.name}
          </CardHeading>
          <CardHeading as="h3">Precio: ${product?.total_price}</CardHeading>

          <form onSubmit={handleSubmit}>
            <label style={{ fontSize: '1.5rem' }}>
              Cantidad:
              <StyledInput
                min={1}
                max={100}
                type="number"
                id="quantity"
                name="quantity"
                aria-label="quantity"
                value={quantity}
                onChange={handleOnChange}
              />
            </label>
            <CardButton>agregar al carrito</CardButton>
          </form>
        </div>
      </ProductContainer>
      <Recommended recommendedProducts={recommendedProducts} />
    </Main>
  )
}




export async function getServerSideProps(context) {
  const { productId } = context.params

  if (!productId) {
    return {
      notFound: true,
    }
  }

  const product = await getProductById(productId)
  const recommendedProducts = await getRecommendedProducts(productId)

  return {
    props: {
      product,
      recommendedProducts,
    },
  }
}
