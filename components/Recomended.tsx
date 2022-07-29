import styled from 'styled-components'

import ProductCard from './ProductCard'
import { Heading } from './styles/Heading.styled'
import { ProductsContent } from './styles/ProductsContent.styled'
import { ProductsHeader } from './styles/ProductsHeader.styled'
import { ProductsList } from './styles/ProductsList.styled'

const RecomendedProductsList = styled(ProductsList)`
  @media (min-width: 1024px) {
    grid-template-columns: 220px;
  }
`

export default function Recomended({ recomendedProducts = [] }) {
  return (
    <ProductsContent>
      <ProductsHeader>
        <Heading>Recomendados</Heading>
      </ProductsHeader>
      <RecomendedProductsList>
        {recomendedProducts.map((product) => (
          <ProductCard
            key={product.product_id}
            product={product}
            imageSize="small"
          />
        ))}
      </RecomendedProductsList>
    </ProductsContent>
  )
}