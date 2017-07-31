import axios from 'axios'


const reducer = (state=[], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.product];
    default:
      return state
  }
}

const ADD_TO_CART= 'ADD_TO_CART'
export const addToCartAction = product => {
  return {
    type: ADD_TO_CART,
    product
  }
}

export const addToCartThunk = productId => dispatch =>
    axios.get(`/api/products/${productId}`)
      .then(product => {
        dispatch(addToCartAction(product.data))
      })
      .catch((e) => console.error(e))


export default reducer
