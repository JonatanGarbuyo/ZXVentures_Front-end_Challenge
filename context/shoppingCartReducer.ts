import { CartItem, CartState } from 'types'

type CartAction =
  | { type: 'addItem'; payload: CartItem }
  | { type: 'removeItem'; payload: { id: string } }

export default function shoppingCartReducer(
  state: CartState,
  action: CartAction
): CartState {
  switch (action.type) {
    case 'addItem':
      return addItem(state, action.payload)
    case 'removeItem':
      return state

    default:
      return state
  }
}

function addItem(state: CartState, newItem: CartItem): CartState {
  const index = state.cartItems.findIndex(
    (cartItem) => cartItem.product_id === newItem.product_id
  )

  if (index) {
    state.cartItems[index].amount += newItem.amount
  } else {
    state.cartItems.push(newItem)
  }

  return { ...state }
}
