import styled from 'styled-components'

export const Container = styled.div`
  max-width: 992px;
  min-height: 100vh;
  padding: 0 1rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  @media (min-width: 1200px) {
    max-width: 1200px;
  }
`
