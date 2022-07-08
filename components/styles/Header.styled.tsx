import styled from 'styled-components'

export const StyledHeader = styled.header`
  padding-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 10px;
  text-transform: uppercase;

  select {
    padding: 0 1rem;
    color: #666;
    font-size: 12px;
    height: 28px;
    border: 1px solid #e3e3e3;
    -webkit-border-radius: 14px;
    -moz-border-radius: 14px;
    border-radius: 14px;
    background: transparent;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`

export const HeaderLogo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  color: var(--color-brand-black);

  b {
    font-weight: 800;
    font-size: 5rem;
  }

  span {
    display: block;
    font-size: 10px;
    color: #666;
    text-transform: uppercase;
  }
`
