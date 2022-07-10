import { FormContainer } from './styles/Form.styles'

export default function SearchForm() {
  return (
    <FormContainer>
      <form action="/search" method="get" role="search">
        <input id="search-input" name="q" type="text" placeholder="Buscar..." />
        <button id="search-submit" type="submit">
          P
        </button>
      </form>
    </FormContainer>
  )
}
