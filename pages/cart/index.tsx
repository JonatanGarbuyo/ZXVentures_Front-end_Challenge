import { useContext } from 'react'

import CartItemCard from '../../components/CartItemCard'
import Recommended from '../../components/Recommended'
import { Heading } from '../../components/styles/Heading.styled'
import { Main } from '../../components/styles/Main.styled'

import { formatCurrency } from 'utils/helperFunctions'
import Checkout from '@components/Checkout'
import { TotalContainer } from '@components/styles/TotalContainer.styled'
import { getProductsByCategory } from 'service/products'
import ShoppingCartContext from 'context/shoppingCartContext'
import { ProductItem } from 'types'

interface props {
  recommendedProducts: ProductItem[]
}

export default function CartComponent({ recommendedProducts }: props) {
  const {cartState: {cartItems, totalPrice}} = useContext(ShoppingCartContext)

  return (
    <Main>
      <div>
        {cartItems.length ? cartItems.map((item) => (
          <CartItemCard item={item} key={item.product_id} imageSize="medium" />
        )):
        <Heading style={{textAlign:"center", padding: "20px"}}>El carrito esta vacio</Heading>
        }

        <Heading id="Total">
          <TotalContainer>
            <span>Total: </span>
            <span>{formatCurrency(totalPrice)}</span>
          </TotalContainer>
        </Heading>

        <Checkout />
      </div>
      <Recommended recommendedProducts={recommendedProducts} />
    </Main>
  )
}

export async function getServerSideProps() {
  const recommendedProducts = await getProductsByCategory('mas vendidos')

  return {
    props: {
      recommendedProducts,
    },
  }
}
