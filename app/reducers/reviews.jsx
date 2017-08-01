import axios from 'axios'

const reducer = (state = {reviews: [], userReviews: []}, action) => {
  const newState = Object.assign({}, state)
  switch (action.type) {
  case FETCH_REVIEWS:
    newState.reviews = action.reviews
    break
  case ADD_REVIEW:
    newState.reviews = [...state, action.review]
    break
  case FETCH_USER_REVIEWS:
    newState.userReviews = action.reviews
    break
  default:
    return state
  }
  return newState
}

const FETCH_REVIEWS = 'FETCH_REVIEWS'
const FETCH_USER_REVIEWS = 'FETCH_USER_REVIEWS'
const ADD_REVIEW = 'ADD_REVIEW'

// action creator
export function fetchReviewSingleProduct(reviews) {
  return {
    type: FETCH_REVIEWS,
    reviews
  }
}

export function fetchUserReviews(reviews) {
  return {
    type: FETCH_USER_REVIEWS,
    reviews
  }
}

export function addReview(review) {
  return {
    type: ADD_REVIEW,
    review
  }
}

// thunk
export function getReviewsForSingleProd(id) {
  return dispatch =>
    axios.get(`/api/reviews/${id}`)
      .then(result => {
        dispatch(fetchReviewSingleProduct(result.data))
      })
      .catch((e) => console.error(e))
}

export const getReviewsThunk = (userId) => dispatch => {
  axios.get(`/api/reviews/myreviews`)
  .then(reviews =>
    dispatch(fetchUserReviews(reviews.data)))
  .catch((e) => console.error(e))
}

export function addNewReview(review) {
  return dispatch =>
    axios.post(`/api/reviews/`, review)
      .then(result => {
        dispatch(addReview(result.data))
      })
      .catch((e) => console.error(e))
}

export default reducer
