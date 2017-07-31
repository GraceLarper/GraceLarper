import axios from 'axios'

const ADD_TO_CART = 'ADD_TO_CART'

export const addToCart = (product, order) => {
  return {
    type: ADD_TO_CART,
    product,
    order
  }
}

const reducer = (state = { products: [] }, action) => {
  switch (action.type) {
  case ADD_TO_CART:
    return Object.assign({}, state, { products: [...state.products, action.product] }, { order: action.order })
  default:
    return state
  }
}

export default reducer

export function addCart(product) {
  return dispatch =>
    axios.get(`/api/orders`)
      .then(result => {
        dispatch(addToCart(product, result.data[0]))
      })
      .catch((e) => console.error(e))
}
