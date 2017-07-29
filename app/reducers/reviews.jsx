import axios from 'axios'


const reducer = (state=[], action) => {
  switch (action.type) {

    case FETCH_REVIEWS:
      return action.reviews
    default:
      return state
  }
}


const FETCH_REVIEWS = 'FETCH_REVIEWS'


export function fetchReviewSingleProduct(reviews){
  return {
    type: FETCH_REVIEWS,
    reviews
  }
}
export function getReviewsForSingleProd (id) {
  return dispatch =>
    axios.get(`/api/reviews/${id}`)
      .then(result => {
        console.log('reults', result)
        dispatch(fetchReviewSingleProduct(result.data))
      })
      .catch((e) => console.error(e))
}

export default reducer
