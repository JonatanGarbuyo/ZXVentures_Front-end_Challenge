import styled from 'styled-components'

interface Props {
  size?: 'small'
}

export const ImageContainer = styled.figure`
  position: relative;
  margin: auto;
  padding: 1rem;
  width: 120px;
  height: 120px;
  border: 1px solid var(--color-brand-white);
  justify-self: center;

  @media (min-width: 768px) {
    width: ${({ size }: Props) => (size === 'small' ? '120px' : '200px')};
    height: ${({ size }: Props) => (size === 'small' ? '120px' : '200px')};
  }

  @media (min-width: 1024px) {
    width: ${({ size }: Props) => (size === 'small' ? '120px' : '220px')};
    height: ${({ size }: Props) => (size === 'small' ? '120px' : '220px')};
  }
`
