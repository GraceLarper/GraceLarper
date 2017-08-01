import axios from 'axios'

const ADD_TO_CART = 'ADD_TO_CART'
const GET_ORDER = 'GET_ORDER'

export const addToCart = (product, order) => {
  return {
    type: ADD_TO_CART,
    product,
    order
  }
}

export const getOrder = order => ({
  type: GET_ORDER,
  order
})

const reducer = (state = { products: [], order: null, productsForOrder: [] }, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return Object.assign({}, state, { products: [...state.products, action.product] }, { order: action.order })
    case GET_ORDER:
      return Object.assign({}, state, { productsForOrder: [...state.productsForOrder, action.order] })
    default:
      return state
  }
}

export function addToCartThunk(product) {
  return dispatch =>
    axios.post(`/api/orders`, product)
      .then(result => {
        dispatch(addToCart(product, result.data.id))
      })
      .catch((e) => console.error(e))
}

export function getOrderThunk(orderId) {
  return dispatch =>
  axios.get(`/api/orderproducts/${orderId}`)
  .then(order =>
    dispatch(getOrder(order)))
}

// export const addToCartThunk = (product) => dispatch => {
//   axios.post('/api/orders', product)
//   .then(order => order.data)
//   .then(dispatch(addToCart(product)))
//   }

export default reducer
