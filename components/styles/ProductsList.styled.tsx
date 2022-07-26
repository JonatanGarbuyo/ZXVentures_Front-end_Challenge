import styled from 'styled-components'

export const ProductsList = styled.div`
  display: grid;
  gap: 1rem;
  margin-top: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 220px);
    gap: 3rem;
    justify-content: center;
  }
`
