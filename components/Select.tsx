import { ChangeEvent } from 'react'
import { FaChevronDown } from 'react-icons/fa'
import styled from 'styled-components'

import { StyledSelect, SelectWrapper } from './styles/Select.styled'

interface Props {
  children: JSX.Element | JSX.Element[]
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void
}

const StyledSelectWrapper = styled(SelectWrapper)`
  @media (min-width: 768px) {
    max-width: 600px;
    margin: auto;
  }
`

export default function Select({ children, onChange }: Props) {
  return (
    <StyledSelectWrapper>
      <StyledSelect width="100%" onChange={onChange}>
        {children}
      </StyledSelect>
      <FaChevronDown
        style={{ position: 'absolute', right: '10px', top: '10px', zIndex: -1 }}
      />
    </StyledSelectWrapper>
  )
}
