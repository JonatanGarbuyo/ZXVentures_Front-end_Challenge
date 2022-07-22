import styled from 'styled-components'

interface SelectProps {
  width?: string
}

export const SelectWrapper = styled.div`
  position: relative;
  max-width: 500px;
`

export const StyledSelect = styled.select`
  appearance: none;
  padding: 0 3rem 0 1rem;
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
`

export const Option = styled.option`
  text-transform: capitalize;
`
