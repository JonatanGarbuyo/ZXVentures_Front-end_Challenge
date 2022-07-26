import styled from 'styled-components'

export const HeaderFirstRow = styled.div`
  padding-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 10px;
  text-transform: uppercase;
`

export const HeaderSecondRow = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
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

  @media (min-width: 1024px) {
    span {
      text-align: left;
    }
  }
`

export const HeaderLogin = styled.ul`
  float: none;
  clear: both;
  margin: 0;
  padding: 1.5rem 0 0 0;
  list-style: none;
  text-transform: uppercase;
  text-align: center;
  vertical-align: bottom;

  li {
    line-height: 32px;
    display: inline-block;
    padding: 0;
    margin: 0 0 0 15px;
  }

  @media (min-width: 480px) {
    padding: 3rem 0 0 0;
  }

  @media (min-width: 768px) {
    float: left;
    clear: none;
    margin: 45px 30px 0 0;
    padding: 0;
  }
`
