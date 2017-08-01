import axios from 'axios'

const ADD_TO_CART = 'ADD_TO_CART'
const GET_ORDER = 'GET_ORDER'
const GET_ORDER_ID = 'GET_ORDER_ID'
const REMOVE_PRODUCT = 'REMOVE_PRODUCT'
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
export const removeProduct = product => ({
  type: REMOVE_PRODUCT,
  product
})

const reducer = (state = { products: [], order: null, productsForOrder: [] }, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return Object.assign({}, state, { products: [...state.products, action.product] }, { order: action.order })
    case GET_ORDER:
      return Object.assign({}, state, { productsForOrder: [...state.productsForOrder, ...action.order] })
    case GET_ORDER_ID:
      return Object.assign({}, state, { order: action.order })
    case REMOVE_PRODUCT:
      let arr = state.productsForOrder.filter(product => {
        if (action.product !== product.product_id) {
          return +action.product !== product.product_id
        }
      })
      return Object.assign({}, state, { productsForOrder: arr })
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
      .then(order => {
        dispatch(getOrder(order.data))
      })
}

export function getOrderIdThunk() {
  return dispatch =>
    axios.get('/api/orders')
      .then(result => {
        return dispatch(getOrderId(result.data[0].id))
      })
      .catch((e) => console.error(e))
}

export function removeItem(orderId, productId) {
  return dispatch => {
    dispatch(removeProduct(productId))
    axios.delete(`/api/orderproducts/delete/${orderId}/${productId}`)
      .catch((e) => console.error(e))
  }
}

export function checkout(orderId) {
  return dispatch => {
    axios.put(`/api/orders/${orderId}`, { status: 'Completed' })
      .catch((e) => console.error(e))
  }
}
export default reducer
