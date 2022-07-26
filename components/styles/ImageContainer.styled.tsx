import styled from 'styled-components'

export const ImageContainer = styled.figure`
  position: relative;
  margin: 0;
  padding: 1rem;
  width: 120px;
  height: 120px;
  border: 1px solid var(--color-brand-white);
  justify-self: center;

  @media (min-width: 768px) {
    width: 200px;
    height: 200px;
  }

  @media (min-width: 1024px) {
    width: 220px;
    height: 220px;
  }
`
