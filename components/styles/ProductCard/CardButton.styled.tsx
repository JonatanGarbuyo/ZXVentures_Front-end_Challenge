import styled from 'styled-components'

import { Button } from '../Button.styled'

export const CardButton = styled(Button)`
  text-transform: uppercase;
  font-size: 1.2rem;

  &:hover {
    color: var(--color-brand-white);
    box-shadow: 0 1px var(--color-brand-gray),
      inset 0 0 0 600px var(--color-brand-black);
  }
`
