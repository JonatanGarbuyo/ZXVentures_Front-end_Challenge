import { ChangeEvent } from 'react'
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

export default function Header() {
  const router = useRouter()

  function handleSelect(e: ChangeEvent<HTMLSelectElement>) {
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
              width="100%"
              color="white"
              aria-label="My cart button"
              onMouseUp={handleClick}
            >
              My carrito: {3} item(s)
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
