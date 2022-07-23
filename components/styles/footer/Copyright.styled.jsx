import styled from 'styled-components'

export const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;

  a {
    line-height: 1.5rem;
    font-size: 1rem;
  }

  svg {
    width: 15px;
    margin: 0 20px 0 0;
    font-size: 20px;
    color: var(--color-brand-gray);
  }

  span {
    font-size: 1.2rem;
  }

  #contact_form {
    width: 100%;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-evenly;

    #contact_form {
      width: none;
      margin: 2rem 0px;
    }
  }
`

export const FooterElement = styled.div`
  display: flex;
  flex-direction: column;
`

export const Copyright = styled.div`
  text-transform: uppercase;
  margin: 3rem 0px;
  text-align: center;
`
