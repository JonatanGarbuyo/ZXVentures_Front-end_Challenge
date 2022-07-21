import { FaMapMarkerAlt, FaPhoneAlt, FaCheck } from 'react-icons/fa'

import {
  Copyright,
  StyledFooter,
  FooterElement,
} from './styles/footer/Copyright.styled'
import { FormContainer } from './styles/Form.styles'
import { Heading } from './styles/Heading.styled'

export default function Footer() {
  function handleSubmit(e) {
    e.preventDefault()
  }

  return (
    <>
      <StyledFooter>
        <FooterElement>
          <Heading as="h3">Siguenos</Heading>
          <ul>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">Pinterest</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">Youtube</a>
            </li>
          </ul>
        </FooterElement>

        <FooterElement>
          <Heading as="h3">Contacto</Heading>
          <ul>
            <li>
              <FaMapMarkerAlt /> <span>1234 Calle Falsa, Glasgow D04 89GR</span>
            </li>
            <li>
              <FaPhoneAlt /> <span>54(11) 4321-1234</span>
            </li>
          </ul>
        </FooterElement>

        <FooterElement>
          <Heading as="h3">Suscribete</Heading>
          <FormContainer id="contact_form">
            <form onSubmit={handleSubmit} acceptCharset="UTF-8">
              <input type="hidden" name="form_type" value="customer" />
              <input
                type="hidden"
                id="newsletter-first-name"
                name="contact[first_name]"
                value="Subscriber"
              />
              <input
                type="hidden"
                id="newsletter-last-name"
                name="contact[last_name]"
                value="Newsletter"
              />
              <input
                type="email"
                id="email-input"
                placeholder="your@email.com"
                name="contact[email]"
              />

              <button id="email-submit">
                <FaCheck />
              </button>
            </form>
          </FormContainer>
        </FooterElement>
      </StyledFooter>

      <Copyright>
        <p>
          © 2022 Drinkstore +. All Rights Reserved.
          <br />
          Design by <a href="//templatemonster.com">TemplateMonster.com</a>{' '}
          <a href="https://vercel.com">Powered by Vercel</a>.
        </p>
      </Copyright>
    </>
  )
}
