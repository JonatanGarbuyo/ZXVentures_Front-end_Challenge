import { useReducer } from 'react'

import ShoppingCartContext from './shoppingCartContext'
import shoppingCartReducer from './shoppingCartReducer'

import { CartItem } from 'types'

interface props {
  children: JSX.Element | JSX.Element[]
}

const INITIAL_STATE = {
  cartItems: [] as CartItem[],
  totalPrice: 0
} 

export default function ShoppingCartProvider({ children }: props) {
  const [cartState, dispatch] = useReducer(shoppingCartReducer, INITIAL_STATE)

  const addItem = (item: CartItem) => {
    dispatch({type: "addItem", payload:item})
  }

  function removeItem(itemId:string){
    dispatch({type: "removeItem", payload:{id:itemId}})
  }

  function changeQty(item: CartItem, qty: string){
    dispatch({type: "changeQty", payload:{item, qty} })
  }

  return (
    <ShoppingCartContext.Provider value={{ cartState, addItem, removeItem, changeQty }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}
