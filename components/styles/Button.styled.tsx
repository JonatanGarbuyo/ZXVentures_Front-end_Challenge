import styled from 'styled-components'

interface ListProps {
  width?: string
  color?: string
  backgroundColor?: string
  radius?: string
  border?: string
  p?: string
}

export const Button = styled.button`
  border: ${({ border }: ListProps) => border || '1px solid'};
  text-align: left;
  width: ${({ width }: ListProps) => width};
  color: ${({ color }: ListProps) => 'var(--color-brand-' + color + ')'};
  background-color: ${({ backgroundColor }: ListProps) =>
    'var(--color-brand-' + backgroundColor + ')'};
  padding: ${({ p }: ListProps) => p || '0 1rem'};
  line-height: 3rem;
  border-radius: ${({ radius }: ListProps) => radius || '16px'};
  transition: 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    color: ${({ backgroundColor }: ListProps) =>
      'var(--color-brand-' + backgroundColor + ')'};
    background-color: ${({ color }: ListProps) =>
      'var(--color-brand-' + color + ')'};
  }
`
