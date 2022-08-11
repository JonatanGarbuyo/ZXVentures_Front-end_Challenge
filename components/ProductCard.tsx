import { useState } from 'react'
import Image from 'next/image'

import { ProductItem } from '../types'
import { CardContainer } from '../components/styles/productCard/CardContainer.styled'
import { ImageContainer } from '../components/styles/ImageContainer.styled'
import { CardHeading } from '../components/styles/productCard/CardHeading.styled'
import { CardButton } from '../components/styles/productCard/CardButton.styled'

interface Props {
  product: ProductItem
  imageSize?: 'small' | 'medium' | 'large'
}

export default function ProductCard({ product: p, imageSize }: Props) {
  const [src, setSrc] = useState(p.image_url)

  function handleClick(productId: string) {
    console.log('productId: ', productId)
  }

  return (
    <CardContainer>
      <a href={`/product/${p.product_id}`}>
        <ImageContainer size={imageSize}>
          <Image
            src={src}
            onError={() => setSrc('/no-photo.png')}
            width={100}
            height={100}
            alt={p.description}
            layout="responsive"
            sizes="30vw"
          />
        </ImageContainer>
      </a>

      <div>
        <a href={`/product/${p.product_id}`}>
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
