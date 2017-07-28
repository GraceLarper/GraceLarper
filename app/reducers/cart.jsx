import axios from 'axios'


const reducer = (state=[], action) => {
  switch (action.type) {
    case ADD_TO_CART:
    if (!this.products) return [action.product];
    else return [...this.products, action.product];
    default:
      return state
  }
}

const ADD_TO_CART= 'ADD_TO_CART'
export function addToCartAction(product) {
  return {
    type: ADD_TO_CART,
    product
  }
}

export function addToCartThunk (productId) {
  return dispatch =>
    axios.get(`/api/orders/`)
      .then(order => {
        dispatch(addToCartAction(order.data))
      })
      .catch((e) => console.error(e))
}

export default reducer
