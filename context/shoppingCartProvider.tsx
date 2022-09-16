import { useReducer } from 'react'

import ShoppingCartContext from './shoppingCartContext'
import shoppingCartReducer from './shoppingCartReducer'

import { CartItem } from 'types'

interface props {
  children: JSX.Element | JSX.Element[]
}

const INITIAL_STATE = {
  cartItems: [{
    "product_id": "4854059991085",
    "variant_id": "33619207749677",
    "total_price": "696.54",
    "price_per_unit": "696.54",
    "list_price_id": "7",
    "sku": "Combo Andes Origen Latas 473",
    "categories": [
      "cervezas",
      "mas vendidos"
    ],
    "units_per_pack": 1,
    "image_url": "https://cdn.shopify.com/s/files/1/0257/2242/1293/products/Combo_Andes.jpg?v=1585767280",
    "handle": "6pack-andes-origen-473ml-roja-rubia-ipa",
    "compare_at_price": "1482.00",
    "allowed_packs": [
      1,
      2,
      3
    ],
    "name": "Incluye un 6pack de 473ml  de cada variedad de : Roja; Rubia; IPA. Total 18 Latas",
    "description": "",
    "discount_percentage": 53,
    "size": 1000,
    "price_per_litre": "201"
  }] as CartItem[],
  totalPrice: 0
} 

// () => JSON.parse(localStorage.getItem('cart'))
export default function ShoppingCartProvider({ children }: props) {
  const [cartState, dispatch] = useReducer(shoppingCartReducer, INITIAL_STATE)

  function addItem(item: CartItem){
    dispatch({type: "addItem", payload:item})
  }

  function removeItem(itemId:string){
    dispatch({type: "removeItem", payload:{id:itemId}})
  }

  return (
    <ShoppingCartContext.Provider value={{ cartState, addItem, removeItem }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}
