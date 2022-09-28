import { ChangeEvent, useContext, useState } from 'react'
import Image from 'next/image'
import styled from 'styled-components'

import { CartItem } from '../types'

import { ProductContainer } from './ProductContainer.styled'
import { ImageContainer } from './styles/ImageContainer.styled'
import { CardHeading } from './styles/CardHeading.styled'
import { PriceContainer } from './styles/PriceContainer.styled'
import { StyledInput } from './styles/Input.styled'
import { Button } from './styles/Button.styled'

import { formatCurrency } from 'utils/helperFunctions'
import ShoppingCartContext from 'context/shoppingCartContext'

interface Props {
  item: CartItem
  imageSize?: 'small' | 'medium' | 'large'
}

const CartItemContainer = styled(ProductContainer)`
  border-bottom: 1px solid var(--color-brand-white);
  position: relative;

  @media (min-width: 479px) {
    grid-template-columns: auto 1fr;
    justify-items: stretch;
  }
`

const DescriptionContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`

export default function CartItemCard({ item, imageSize }: Props) {
  const [src, setSrc] = useState(item.image_url)
  const { changeQty, removeItem } = useContext(ShoppingCartContext)

  function handleOnChange(e: ChangeEvent<HTMLInputElement>) {
    const qty = e.target.value

    if (parseInt(qty) > 100) {
      alert('100 items max')

      return
    }

    if (!qty || parseInt(qty) < 0) {
      changeQty(item, '0')

      return
    }

    changeQty(item, qty)
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

      <DescriptionContainer style={{ width: '100%' }}>
        <Button  style={{ position: "absolute", top: 0, right:10}} onClick={() => removeItem(item.product_id)}>X</Button>
        <CardHeading as="h2" color="var(--color-brand-gray)" size="1.5rem">
          {item.name}
        </CardHeading>
        <PriceContainer>
          <p>Precio: {formatCurrency(parseFloat(item.total_price))}</p>

          <label style={{ fontSize: '1.5rem' }}>
            Cantidad:
            <StyledInput
              onWheelCapture={(e) => {
                e.currentTarget.blur()
              }}
              min={1}
              max={100}
              type="number"
              id="quantity"
              name="quantity"
              aria-label="quantity"
              value={item.qty}
              onChange={handleOnChange}
              onBlur={handleOnChange}
            />
          </label>
          <p>
            Subtotal:{' '}
            <span>
              {formatCurrency(parseFloat(item.total_price) * item.qty)}
            </span>
          </p>
        </PriceContainer>
      </DescriptionContainer>
    </CartItemContainer>
  )
}
