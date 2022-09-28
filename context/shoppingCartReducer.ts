import { CartItem, CartState } from 'types'

type CartAction =
  | { type: 'addItem'; payload: CartItem }
  | { type: 'removeItem'; payload: { id: string } }
  | { type: 'changeQty'; payload: { item: CartItem; qty: string } }
  | { type: 'incrementQty'; payload: { item: CartItem; qty: string } }

export default function shoppingCartReducer(
  state: CartState,
  action: CartAction
): CartState {
  switch (action.type) {
    case 'addItem':
      return addItem(state, action.payload)
    case 'removeItem':
      return removeItem(state, action.payload.id)
    case 'changeQty':
      return changeQty(state, action.payload.item, action.payload.qty)
    case 'incrementQty':
      return incrementQty(state, action.payload.item, action.payload.qty)

    default:
      return state
  }
}

function getTotalPrice(arr) {
  return arr.reduce(
    (acc, curr) => acc + parseFloat(curr.total_price) * curr.qty,
    0
  )
}

function removeItem(state: CartState, id: string): CartState {
  const cartItems = state.cartItems.filter((item) => item.product_id !== id)

  const newState = {
    totalPrice: getTotalPrice(cartItems),
    cartItems,
  }

  return newState
}

function addItem(state: CartState, newItem: CartItem): CartState {
  let cartItems: CartItem[]
  const index = state.cartItems.findIndex(
    (cartItem) => cartItem.product_id === newItem.product_id
  )

  if (index >= 0) {
    cartItems = state.cartItems.map((cartItem) => {
      if (cartItem.product_id === newItem.product_id) {
        return { ...cartItem, qty: cartItem.qty + 1 }
      }

      return cartItem
    })
  } else {
    newItem.qty = 1
    cartItems = [...state.cartItems, newItem]
  }

  return { cartItems, totalPrice: getTotalPrice(cartItems) }
}

function changeQty(state: CartState, item: CartItem, qty: string): CartState {
  let cartItems: CartItem[]
  const index = state.cartItems.findIndex(
    (cartItem) => cartItem.product_id === item.product_id
  )

  if (index >= 0) {
    cartItems = state.cartItems.map((cartItem) => {
      if (cartItem.product_id === item.product_id) {
        return { ...cartItem, qty: parseInt(qty) }
      }

      return cartItem
    })
  }

  return { cartItems, totalPrice: getTotalPrice(cartItems) }
}

function incrementQty(
  state: CartState,
  item: CartItem,
  qty: string
): CartState {
  let cartItems: CartItem[]
  const index = state.cartItems.findIndex(
    (cartItem) => cartItem.product_id === item.product_id
  )

  if (index >= 0) {
    cartItems = state.cartItems.map((cartItem) => {
      if (cartItem.product_id === item.product_id) {
        return { ...cartItem, qty: cartItem.qty + parseInt(qty) }
      }

      return cartItem
    })
  }

  return { cartItems, totalPrice: getTotalPrice(cartItems) }
}
