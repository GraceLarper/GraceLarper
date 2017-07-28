import axios from 'axios'


const reducer = (state=[], action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return action.products
    case FETCH_SINGLE_PRODUCTS:
      return [action.product, ...state]
    default:
      return state
  }
}

const FETCH_SINGLE_PRODUCTS = 'FETCH_SINGLE_PRODUCTS'
const FETCH_PRODUCTS = 'FETCH_PRODUCTS'
export function fetchProducts(products) {
  return {
    type: FETCH_PRODUCTS,
    products
  }
}

export function fetchSingleProducts(product) {
  return {
    type: FETCH_SINGLE_PRODUCTS,
    product
  }
}
export function getProducts (queryStatus) {
  return dispatch =>
    axios.get(`/api/products${queryStatus}`)
      .then(result => {
        dispatch(fetchProducts(result.data))
      })
      .catch((e) => console.error(e))
}

export function getSingleProduct (id) {
  return dispatch =>
    axios.get(`/api/products/${id}`)
      .then(result => {
        dispatch(fetchSingleProducts(result.data))
      })
      .catch((e) => console.error(e))
}



export default reducer
