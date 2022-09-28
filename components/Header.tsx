import { ChangeEvent, useContext } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import {
  HeaderFirstRow,
  HeaderLogo,
  HeaderLogin,
  HeaderSecondRow,
} from './styles/Header.styled'
import { CartButtonContainer } from './styles/CartButtonContainer.styled'
import SearchForm from './SearchForm'
import { Option } from './styles/Select.styled'
import Select from './Select'
import { CartButton } from './styles/CartButton.styled'

import ShoppingCartContext from 'context/shoppingCartContext'

export default function Header() {
  const {cartState: {cartItems}} = useContext(ShoppingCartContext)
  const router = useRouter()

  function handleSelect(e: ChangeEvent<HTMLSelectElement>) {
    // eslint-disable-next-line no-console
    console.log(e.target.value)
  }

  function handleClick(e) {
    console.log(e)
    e.target.blur()
    router.push('/cart')
  }

  return (
    <header>
      <HeaderFirstRow>
        <span>Bienvenido a nuestra tienda en linea!</span>
        <Select onChange={handleSelect}>
          <Option value="ars">ARS</Option>
        </Select>
      </HeaderFirstRow>
      <HeaderSecondRow>
        <HeaderLogo>
          <Link href="/">
            <a>
              <b>Drinkstore +</b>
            </a>
          </Link>
          <span>Tienda de bebidas</span>
        </HeaderLogo>
        <div>
          <CartButtonContainer>
            <CartButton
            onClick={handleClick}
              width="100%"
              color="white"
              aria-label="My cart button"
              // onMouseUp={handleClick}
            >
              My carrito: {cartItems.length} item(s)
            </CartButton>
          </CartButtonContainer>

          <SearchForm />

          <HeaderLogin>
            <li>
              <a href="#">Login</a>
            </li>
            <li>
              <a href="#">Crear Cuenta</a>
            </li>
            <li>
              <a href="#">Pagar</a>
            </li>
          </HeaderLogin>
        </div>
      </HeaderSecondRow>
    </header>
  )
}
