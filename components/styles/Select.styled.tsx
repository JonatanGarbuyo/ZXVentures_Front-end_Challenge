import styled from 'styled-components'

interface SelectProps {
  width?: string
}

export const Select = styled.select`
  padding: 0 2rem 0 1rem;
  color: var(--color-brand-accent-pebble);
  font-size: 1.2rem;
  height: 28px;
  border: 1px solid var(--color-brand-accent-pebble);
  border-radius: 14px;
  background: transparent;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: ${({ width }: SelectProps) => width};
  text-transform: capitalize;
  max-width: 500px;
`

export const Option = styled.option`
  text-transform: capitalize;
`
