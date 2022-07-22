import { ChangeEvent } from 'react'
import { FaChevronDown } from 'react-icons/fa'

import { StyledSelect, SelectWrapper } from './styles/Select.styled'

interface Props {
  children: JSX.Element | JSX.Element[]
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void
}

export default function Select({ children, onChange }: Props) {
  return (
    <SelectWrapper>
      <StyledSelect width="100%" onChange={onChange}>
        {children}
      </StyledSelect>
      <FaChevronDown
        style={{ position: 'absolute', right: '10px', top: '10px', zIndex: -1 }}
      />
    </SelectWrapper>
  )
}
