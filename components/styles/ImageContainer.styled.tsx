import styled, { css } from 'styled-components'

interface Props {
  size?: 'small' | 'medium' | 'large'
}

export const ImageContainer = styled.figure`
  position: relative;
  margin: auto;
  padding: 1rem;
  ${({ size }: Props) =>
    ((size === 'small' || size === 'medium') &&
      css`
        width: 120px;
        height: 120px;
      `) ||
    (size === 'large' &&
      css`
        width: 220px;
        height: 220px;
      `)};
  border: 1px solid var(--color-brand-white);
  justify-self: center;

  @media (min-width: 768px) {
    ${({ size }: Props) =>
      (size === 'medium' &&
        css`
          width: 220px;
          height: 220px;
        `) ||
      (size === 'large' &&
        css`
          width: 320px;
          height: 320px;
        `)};
  }

  @media (min-width: 1024px) {
    ${({ size }: Props) =>
      size === 'large' &&
      css`
        width: 420px;
        height: 420px;
      `};
  }
`
