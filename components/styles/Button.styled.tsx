import styled from 'styled-components'

export const Button = styled.button`
  text-align: left;
  width: 100%;
  color: var(--color-brand-white);
  background: var(--color-brand-black);
  padding: 0 15px;
  line-height: 3rem;
  -webkit-border-radius: 16px;
  -moz-border-radius: 16px;
  border-radius: 16px;
  -webkit-box-shadow: inset 0 0 0 0 #666666;
  box-shadow: inset 0 0 #666;
  -webkit-transition: 0.2s ease-in-out;
  -moz-transition: 0.2s ease-in-out;
  -ms-transition: 0.2s ease-in-out;
  -o-transition: 0.2s ease-in-out;
  transition: 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.005);
  }
`
