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
        <button
          aria-label="search button"
          id="search-submit"
          type="submit"
          style={{ position: 'relative' }}
        >
          <FaSearch
            style={{ position: 'absolute', right: '10px', top: '8px' }}
          />
        </button>
      </form>
    </FormContainer>
  )
}
