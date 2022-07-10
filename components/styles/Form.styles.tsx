import styled from 'styled-components'

export const FormContainer = styled.div`
  color: #aaa;
  width: 100%;
  float: none;
  margin: 15px 0 0;
  padding: 0;

  form {
    padding: 0 30px 0 0;
    border: 1px solid #e3e3e3;
    -webkit-border-radius: 16px;
    -moz-border-radius: 16px;
    border-radius: 16px;
  }

  input {
    width: 100%;
    height: 30px;
    float: left;
    padding: 0 0 0 15px;
    padding: 6px 12px;
    border: none;
    font: 12px Open Sans;
    color: #aaa;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-border-radius: 15px;
    border-radius: 15px;
    box-shadow: none;
    outline: none !important;
  }

  button {
    width: 30px;
    height: 30px;
    margin: 0 -32px 0 0;
    border: 0;
    outline: none !important;
    vertical-align: top;
    background: transparent;
    background-color: transparent;
    line-height: 1.5em;
    cursor: pointer;
    -webkit-appearance: button;
  }

  @media (min-width: 480px) {
    width: 50%;
    float: left;
    margin: 30px 0 0;
    padding: 0 10px 0 0;
  }

  @media (min-width: 768px) {
    width: 240px;
    height: 32px;
    float: right;
    margin: 45px 10px 0 0;
  }
`
