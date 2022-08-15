import Link from 'next/link'

import { Button } from './styles/Button.styled'
import { CheckoutContainer } from './styles/CheckoutContainer.styled'

export default function Checkout() {
  return (
    <CheckoutContainer>
      <Link href={'/'}>
        <a>Continue shopping or </a>
      </Link>
      <span>
        <Button>Check out</Button>
      </span>
    </CheckoutContainer>
  )
}
