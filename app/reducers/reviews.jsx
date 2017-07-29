import axios from 'axios'


const reducer = (state=[], action) => {
  switch (action.type) {

    case FETCH_REVIEWS:
      return action.reviews
    case ADD_REVIEW:
      return [...state, action.review]
    default:
      return state
  }
}


const FETCH_REVIEWS = 'FETCH_REVIEWS'
const ADD_REVIEW = 'ADD_REVIEW'


//action creator
export function fetchReviewSingleProduct(reviews){
  return {
    type: FETCH_REVIEWS,
    reviews
  }
}

export function addReview(review){
  return {
    type: ADD_REVIEW,
    review
  }
}



//thunk
export function getReviewsForSingleProd (id) {
  return dispatch =>
    axios.get(`/api/reviews/${id}`)
      .then(result => {
        dispatch(fetchReviewSingleProduct(result.data))
      })
      .catch((e) => console.error(e))
}

export function addNewReview (review) {
  return dispatch =>
    axios.post(`/api/reviews/`, review)
      .then(result => {
        dispatch(addReview(result.data))
      })
      .catch((e) => console.error(e))
}


export default reducer
