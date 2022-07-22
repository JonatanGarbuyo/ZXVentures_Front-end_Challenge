import { FaChevronDown } from 'react-icons/fa'

import { StyledSelect, SelectWrapper } from './styles/Select.styled'

export default function Select({ children }) {
  return (
    <SelectWrapper>
      <StyledSelect width="100%">{children}</StyledSelect>
      <FaChevronDown
        style={{ position: 'absolute', right: '10px', top: '10px', zIndex: -1 }}
      />
    </SelectWrapper>
  )
}
