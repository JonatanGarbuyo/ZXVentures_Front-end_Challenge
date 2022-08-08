import styled from 'styled-components'

export const Main = styled.main`
  @media (min-width: 1024px) {
    display: flex;
    flex-direction: row-reverse;
    wrap: nowrap;
    justify-content: flex-end;
    gap: 3rem;
  }
  @media (min-width: 1200px) {
    justify-content: center;
  }
`
