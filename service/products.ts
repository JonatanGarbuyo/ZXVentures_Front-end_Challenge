import { ProductItem } from "types"


interface RecomendedItems {
  product_id: string
  recommendations: string[]
}

export async function getRecomendedProducts(id: string | string[]): Promise<ProductItem[]>  {
    const response = await fetch(
      `https://zxventures-api.herokuapp.com/recommendations?product_id=${id}`
    )
    const recommended = await response.json() as Promise<RecomendedItems[]>
    const {recommendations} = await recommended[0]

    const recomendedList = await Promise.all(recommendations.map(getProductById))
    
    return recomendedList   
  }

export  async function getProductById(id: string | string[]): Promise<ProductItem> {
    const response = await fetch(`https://zxventures-api.herokuapp.com/products?product_id=${id}` ) 

    const productList = await response.json() as Promise<ProductItem[]>
    
    return productList[0]  
  }
