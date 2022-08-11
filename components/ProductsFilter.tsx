import { ChangeEvent } from 'react'

import Select from '@components/Select'
import { Option } from '@components/styles/Select.styled'

interface Props {
  categories: string[]
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void
}

export default function ProductsFilter({ categories, onChange }: Props) {
  return (
    <Select onChange={onChange} style={{ margin: 'auto' }}>
      {categories.map((category) => (
        <Option key={category} value={category}>
          {category}
        </Option>
      ))}
    </Select>
  )
}
