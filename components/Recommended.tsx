import styled from 'styled-components'

import ProductCard from './ProductCard'
import { Heading } from './styles/Heading.styled'
import { ProductsContent } from './styles/ProductsContent.styled'
import { ProductsList } from './styles/ProductsList.styled'

import { ProductItem } from 'types'

interface props {
  recommendedProducts: ProductItem[]
}

const RecommendedProductsList = styled(ProductsList)`
  @media (min-width: 1024px) {
    grid-template-columns: 220px;
  }
`

export default function Recommended({ recommendedProducts }: props) {
  return (
    <ProductsContent>
      <Heading>Recomendados</Heading>
      <RecommendedProductsList>
        {recommendedProducts &&
          recommendedProducts.map((product) => (
            <ProductCard
              key={product.product_id}
              product={product}
              imageSize="small"
            />
          ))}
      </RecommendedProductsList>
    </ProductsContent>
  )
}
