import styled from 'styled-components'

export const CardContainer = styled.div`
  margin-top: 1.5rem;
  display: grid;
  grid-template-columns: 120px auto;
  gap: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: auto;
  }
`
