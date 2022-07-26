import styled from 'styled-components'

import { Button } from './Button.styled'

export const CartButton = styled(Button)`
  background: var(--color-brand-accent-spotify);
  color: var(--color-brand-black);
  transition: 0.2s ease-in-out;

  &:hover {
    background: var(--color-brand-black);
    color: var(--color-brand-white);
  }
`
