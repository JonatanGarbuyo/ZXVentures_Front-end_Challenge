import {
  HeaderFirstRow,
  HeaderLogo,
  HeaderLogin,
  HeaderSecondRow,
} from './styles/Header.styled'
import { CartButtonContainer } from './styles/CartButtonContainer.styled'
import { Button } from './styles/Button.styled'
import SearchForm from './SearchForm'
import { Option } from './styles/Select.styled'
import Select from './Select'

export default function Header() {
  return (
    <header>
      <HeaderFirstRow>
        <span>Bienvenido a nuestra tienda en linea!</span>
        <Select>
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
            <Button width="100%" backgroundColor="black" color="white">
              My carrito: {3} item(s)
            </Button>
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
