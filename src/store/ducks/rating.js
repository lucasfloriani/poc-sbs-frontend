import { createActions, createReducer } from 'reduxsauce'


export const { Types, Creators } = createActions({
  getRatingRequest: ['ratingID'],
  getRatingSuccess: ['rating'],
  getRatingFailure: null,
  createRatingRequest: ['ratingData'],
  createRatingSuccess: ['rating'],
  createRatingFailure: null,
  updateRatingRequest: ['ratingData'],
  updateRatingSuccess: ['rating'],
  updateRatingFailure: null,
  deleteRatingRequest: ['ratingID'],
  deleteRatingSuccess: null,
  deleteRatingFailure: null,
})

const INITIAL_STATE = {
  rating: {},
  isFetching: false,
}

// Get Rating
const getRatingRequest = (state = INITIAL_STATE) => ({
  ...state,
  isFetching: true,
  rating: {},
})
const getRatingSuccess = (state = INITIAL_STATE, { rating }) => ({
  ...state,
  isFetching: false,
  rating,
})
const getRatingFailure = (state = INITIAL_STATE) => ({
  ...state,
  isFetching: false,
})
// Create Rating
const createRatingRequest = (state = INITIAL_STATE) => ({
  ...state,
  isFetching: true,
})
const createRatingSuccess = (state = INITIAL_STATE, { rating }) => ({
  ...state,
  isFetching: false,
  rating,
})
const createRatingFailure = (state = INITIAL_STATE) => ({
  ...state,
  isFetching: false,
})
// Update Rating
const updateRatingRequest = (state = INITIAL_STATE) => ({
  ...state,
  isFetching: true,
})
const updateRatingSuccess = (state = INITIAL_STATE, { rating }) => ({
  ...state,
  isFetching: false,
  rating,
})
const updateRatingFailure = (state = INITIAL_STATE) => ({
  ...state,
  isFetching: false,
})
// Delete Rating
const deleteRatingRequest = (state = INITIAL_STATE) => ({
  ...state,
  isFetching: true,
})
const deleteRatingSuccess = (state = INITIAL_STATE) => ({
  ...state,
  isFetching: false,
  rating: {},
})
const deleteRatingFailure = (state = INITIAL_STATE) => ({
  ...state,
  isFetching: false,
})

export default createReducer(INITIAL_STATE, {
  [Types.GET_RATING_REQUEST]: getRatingRequest,
  [Types.GET_RATING_SUCCESS]: getRatingSuccess,
  [Types.GET_RATING_FAILURE]: getRatingFailure,
  [Types.CREATE_RATING_REQUEST]: createRatingRequest,
  [Types.CREATE_RATING_SUCCESS]: createRatingSuccess,
  [Types.CREATE_RATING_FAILURE]: createRatingFailure,
  [Types.UPDATE_RATING_REQUEST]: updateRatingRequest,
  [Types.UPDATE_RATING_SUCCESS]: updateRatingSuccess,
  [Types.UPDATE_RATING_FAILURE]: updateRatingFailure,
  [Types.DELETE_RATING_REQUEST]: deleteRatingRequest,
  [Types.DELETE_RATING_SUCCESS]: deleteRatingSuccess,
  [Types.DELETE_RATING_FAILURE]: deleteRatingFailure,
})
