import styled from 'styled-components'

export const CartButtonContainer = styled.div`
  width: 100%;
  margin-top: 30px;
  padding: 0;

  @media (min-width: 480px) {
    width: 50%;
    float: right;
    margin: 30px 0 0;
    padding: 0 0 0 10px;
  }

  @media (min-width: 768px) {
    width: 170px;
    float: right;
    margin: 45px 0 0;
  }
`
