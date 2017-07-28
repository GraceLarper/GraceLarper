import axios from 'axios'


const reducer = (state=[], action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return action.products
    default:
      return state
  }
}

const FETCH_PRODUCTS = 'FETCH_PRODUCTS'
export function fetchProducts(products) {
  return {
    type: FETCH_PRODUCTS,
    products
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

export default reducer
