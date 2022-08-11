import styled from 'styled-components'

export const ProductContainer = styled.section`
  margin: auto;
  margin-top: 1rem;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  align-items: end;
  padding-bottom: 2rem;
  gap: 2rem;

  @media (min-width: 479px) {
    grid-template-columns: 1.1fr 0.9fr;
    justify-items: stretch;
  }
  @media (min-width: 768px) {
    margin-top: 2rem;
  }

  @media (min-width: 1024px) {
    margin-top: 5rem;
  }
`
