import styled from 'styled-components'

interface Props {
  size?: string
  padding?: string
  margin?: string
}

export const Heading = styled.h1`
  margin: ${({ margin }: Props) => margin || '2rem 0 1rem 0'};
  padding: ${({ padding }: Props) => padding || '0'};
  font-weight: 700;
  font-size: ${({ size }: Props) => size || '2rem'};
  color: var(--color-brand-black);
`
