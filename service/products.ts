import { ProductItem } from 'types'

interface RecommendedItems {
  product_id: string
  recommendations: string[]
}

export async function getRecommendedProducts(
  id: string | string[]
): Promise<ProductItem[]> {
  const response = await fetch(
    `https://zxventures-api.herokuapp.com/recommendations?product_id=${id}`
  )
  const recommended = (await response.json()) as Promise<RecommendedItems[]>
  const { recommendations } = await recommended[0]

  const recommendedList = await Promise.all(recommendations.map(getProductById))

  return recommendedList
}

export async function getProductById(
  id: string | string[]
): Promise<ProductItem> {
  const response = await fetch(
    `https://zxventures-api.herokuapp.com/products?product_id=${id}`
  )

  const productList = (await response.json()) as Promise<ProductItem[]>

  return productList[0]
}

export async function getProductsByCategory(category: String) {
  const response = await fetch(
    `https://zxventures-api.herokuapp.com/products?categories_like=${category}`
  )

  return response.json() as Promise<ProductItem[]>
}

export async function getAllProducts() {
  const response = await fetch(`https://zxventures-api.herokuapp.com/products`)

  return response.json() as Promise<ProductItem[]>
}
