import axios from 'axios'

const ADD_TO_CART= 'ADD_TO_CART'

export const addToCart = product => {
  return {
    type: ADD_TO_CART,
    product
  }
}

const reducer = (state=[], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.product];
    default:
      return state
  }
}

export default reducer
