import { ChangeEvent } from 'react'

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
  function handleSelect(e: ChangeEvent<HTMLSelectElement>) {
    console.log(e.target.value)
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
          <b>Drinkstore +</b>
          <span>Tienda de bebidas</span>
        </HeaderLogo>
        <div>
          <CartButtonContainer>
            <CartButton width="100%" color="white" aria-label="My cart button">
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
