import styled from 'styled-components'

interface ListProps {
  direction?: string
}

export const List = styled.ul`
  color: var(--color-brand-gray);
  display: flex;
  flex-direction: ${({ direction }: ListProps) => direction || 'column'};
  gap: 1rem;
  list-style: none;
  margin: 0;
  padding-left: 0.5rem;
`

export const ListItem = styled.li`
  line-height: 1.8rem;
  text-transform: uppercase;
  font-size: 1.2rem;
`
