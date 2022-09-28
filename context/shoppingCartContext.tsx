import { createContext } from "react";

import { CartItem, CartState, ProductItem } from "types";

interface CartContextProps {
  cartState: CartState
  addItem: (item: ProductItem) => void
  removeItem: (itemId:string) => void
  changeQty: (item: CartItem, qty: string) => void
  incrementQty: (item: CartItem, qty: string) => void
}

const ShoppingCartContext = createContext<CartContextProps>({} as CartContextProps)

export default  ShoppingCartContext