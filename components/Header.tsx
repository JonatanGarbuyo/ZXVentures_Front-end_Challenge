import { StyledHeader, HeaderLogo } from './styles/Header.styled'
import { CartButtonContainer } from './styles/CartButtonContainer.styled'
import { Button } from './styles/Button.styled'
import SearchForm from './SearchForm'

export default function Header() {
  return (
    <>
      <StyledHeader>
        <span>Bienvenido a nuestra tienda en linea!</span>
        <select name="currency">
          <option value="ars">ARS</option>
        </select>
      </StyledHeader>
      <HeaderLogo>
        <b>Drinkstore +</b>
        <span>Tienda de bebidas</span>
      </HeaderLogo>
      <div>
        <CartButtonContainer>
          <Button>My carrito: {3} item(s)</Button>
        </CartButtonContainer>

        <SearchForm />
      </div>
    </>
  )
}
