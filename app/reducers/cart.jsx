import axios from 'axios'

const ADD_TO_CART = 'ADD_TO_CART'
const GET_ORDER = 'GET_ORDER'
const GET_ORDER_ID = 'GET_ORDER_ID'

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

export const getOrderId = order => ({
  type: GET_ORDER_ID,
  order
})

const reducer = (state = { products: [], order: null, productsForOrder: [] }, action) => {
  switch (action.type) {
  case ADD_TO_CART:
    return Object.assign({}, state, { products: [...state.products, action.product] }, { order: action.order })
  case GET_ORDER:
    return Object.assign({}, state, { productsForOrder: [...state.productsForOrder, action.order] })
  case GET_ORDER_ID:
    return Object.assign({}, state, { order: action.order })
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
        dispatch(getOrder(order.data)))
}

export function getOrderIdThunk() {
  return dispatch =>
    axios.get('/api/orders')
      .then(result => {
        return dispatch(getOrderId(result.data[0].id))
      })
      .catch((e) => console.error(e))
}

export default reducer
