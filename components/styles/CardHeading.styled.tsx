import styled from 'styled-components'

import { Heading } from './Heading.styled'

export const CardHeading = styled(Heading)`
  color: ${(props) => props.color};
  margin-top: 0;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;

  span {
    text-decoration: line-through;
    font-size: 1.4rem;
    color: var(--color-brand-gray);
    margin-left: 1rem;
    font-weight: 400;
  }

  b {
    font-size: 1.4rem;
    color: var(--color-brand-gray);
    margin-left: 1rem;
    color: var(--color-brand-accent-spotify);
  }
`
