import { useContext, useState } from 'react'
import Image from 'next/image'

import { CartItem, ProductItem } from '../types'

import { CardContainer } from './styles/CardContainer.styled'
import { ImageContainer } from './styles/ImageContainer.styled'
import { CardHeading } from './styles/CardHeading.styled'
import { CardButton } from './styles/CardButton.styled'

import ShoppingCartContext from 'context/shoppingCartContext'

interface Props {
  product: ProductItem
  imageSize?: 'small' | 'medium' | 'large'
}

export default function ProductCard({ product, imageSize }: Props) {
  const {addItem} = useContext(ShoppingCartContext)
  const [src, setSrc] = useState(product.image_url)

  function handleClick(product: ProductItem) {
    const cartItem = product as CartItem
    
    addItem(cartItem)
  }

  return (
    <CardContainer>
      <a href={`/product/${product.product_id}`}>
        <ImageContainer size={imageSize}>
          <Image
            src={src}
            onError={() => setSrc('/no-photo.png')}
            width={100}
            height={100}
            alt={product.description}
            layout="responsive"
            sizes="30vw"
          />
        </ImageContainer>
      </a>

      <div>
        <a href={`/product/${product.product_id}`}>
          <CardHeading as="h2" color="var(--color-brand-gray)" size="1.5rem">
            {product.name}
          </CardHeading>
          <p style={{ fontSize: '1.2rem' }}>{product.description}</p>

          <CardHeading as="h3">
            ${product.total_price}
            <span>{product.compare_at_price}</span>
            <b>{`${product.discount_percentage.toFixed(2)}% OFF`}</b>
          </CardHeading>
        </a>

        <CardButton onClick={() => handleClick(product)}>
          agregar al carrito
        </CardButton>
      </div>
    </CardContainer>
  )
}
