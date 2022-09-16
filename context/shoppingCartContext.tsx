import { createContext } from "react";

import { CartState, ProductItem } from "types";

interface CartContextProps {
  cartState: CartState
  addItem: (item: ProductItem) => void
  removeItem: (itemId:string) => void
}

const ShoppingCartContext = createContext<CartContextProps>({} as CartContextProps)

export default  ShoppingCartContext