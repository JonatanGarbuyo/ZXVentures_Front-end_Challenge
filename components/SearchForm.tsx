import { FaSearch } from 'react-icons/fa'

import { FormContainer } from './styles/Form.styles'

export default function SearchForm() {
  function handleSubmit(e) {
    e.preventDefault()
  }

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <input id="search-input" name="q" type="text" placeholder="Buscar..." />
        <button id="search-submit" type="submit">
          <FaSearch />
        </button>
      </form>
    </FormContainer>
  )
}
