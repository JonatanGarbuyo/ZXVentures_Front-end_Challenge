import { ChangeEvent, useState } from 'react'
import Image from 'next/image'
import styled from 'styled-components'

import { ProductItem } from '../types'

import { ProductContainer } from './ProductContainer.styled'
import { ImageContainer } from './styles/ImageContainer.styled'
import { CardHeading } from './styles/CardHeading.styled'
import { PriceContainer } from './styles/PriceContainer.styled'
import { StyledInput } from './styles/Input.styled'

import { formatCurrency } from 'utils/helperFunctions'

interface Props {
  item: ProductItem
  imageSize?: 'small' | 'medium' | 'large'
}

const CartItemContainer = styled(ProductContainer)`
  border-bottom: 1px solid var(--color-brand-white);

  @media (min-width: 479px) {
    grid-template-columns: auto 1fr;
    justify-items: stretch;
  }
`

export default function CartItemCard({ item, imageSize }: Props) {
  const [src, setSrc] = useState(item.image_url)
  const [quantity, setQuantity] = useState('1')

  function handleOnChange(e: ChangeEvent<HTMLInputElement>) {
    console.log('event:', e)
    const qty = e.target.value

    if (parseInt(qty) > 100) {
      setQuantity('100')
      alert('100 items max')

      return
    }

    if (!qty || parseInt(qty) < 0) {
      setQuantity('0')

      return
    }

    setQuantity(e.target.value)
  }

  return (
    <CartItemContainer>
      <div key={item.product_id}>
        <ImageContainer size={imageSize}>
          <Image
            src={src}
            onError={() => setSrc('/no-photo.png')}
            width={100}
            height={100}
            alt={item.description}
            layout="responsive"
            sizes="30vw"
          />
          ;
        </ImageContainer>
      </div>

      <div style={{ width: '100%' }}>
        <CardHeading as="h2" color="var(--color-brand-gray)" size="1.5rem">
          {item.name}
        </CardHeading>

        <PriceContainer>
          <p>Precio: {formatCurrency(parseFloat(item.total_price))}</p>

          <label style={{ fontSize: '1.5rem' }}>
            Qty:
            <StyledInput
              min={1}
              max={100}
              type="number"
              id="quantity"
              name="quantity"
              aria-label="quantity"
              value={quantity}
              onChange={handleOnChange}
              onBlur={handleOnChange}
            />
          </label>
          <p>
            Subtotal:{' '}
            <span>
              {formatCurrency(
                parseFloat(item.total_price) * parseFloat(quantity)
              )}
            </span>
          </p>
        </PriceContainer>
      </div>
    </CartItemContainer>
  )
}
