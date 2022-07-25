import styled from 'styled-components'

interface ListProps {
  width?: string
  color?: 'black' | 'white'
  radius?: string
  border?: string
  p?: string
}

export const Button = styled.button`
  border-radius: ${({ radius }: ListProps) => radius || '16px'};
  border: none;
  background: linear-gradient(
    to bottom,
    var(--color-brand-white) 0%,
    #fff 100%
  );
  box-shadow: 0 1px #00000026, inset 0 0 #0000;
  color: var(--color-brand-black);

  cursor: pointer;
  line-height: 3rem;
  padding: ${({ p }: ListProps) => p || '0 1rem'};
  text-align: left;
  text-decoration: none;
  transition: 0.2s ease-in-out;
  width: ${({ width }: ListProps) => width};
`
