import { useState } from 'react'
import Image from 'next/image'

import { ProductItem } from '../types'

import { CardContainer } from './styles/ProductCard/CardContainer.styled'
import { ImageContainer } from './styles/ImageContainer.styled'
import { CardHeading } from './styles/ProductCard/CardHeading.styled'
import { CardButton } from './styles/ProductCard/CardButton.styled'

interface Props {
  product: ProductItem
}

export default function ProductCard({ product: p }: Props) {
  const [src, setSrc] = useState(p.image_url)

  const handleClick = (productId) => {
    console.log(productId)
  }

  return (
    <CardContainer>
      <ImageContainer as="a" href="#">
        <Image
          src={src}
          onError={() => setSrc('/no-photo.png')}
          width={100}
          height={100}
          alt={p.description}
          layout="responsive"
        />
      </ImageContainer>

      <div>
        <a href="#">
          <CardHeading as="h2" color="var(--color-brand-gray)" size="1.5rem">
            {p.name}
          </CardHeading>
          <p style={{ fontSize: '1.2rem' }}>{p.description}</p>

          <CardHeading as="h3">
            ${p.total_price}
            <span>{p.compare_at_price}</span>
            <b>{`${p.discount_percentage.toFixed(2)}% OFF`}</b>
          </CardHeading>
        </a>

        <CardButton onClick={() => handleClick(p.product_id)}>
          agregar al carrito
        </CardButton>
      </div>
    </CardContainer>
  )
}