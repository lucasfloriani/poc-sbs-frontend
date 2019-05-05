import { createActions, createReducer } from 'reduxsauce'

export const { Types, Creators } = createActions({
  citiesRequest: ['stateID'],
  citiesSuccess: ['cities'],
  citiesFailure: null,
})

const INITIAL_STATE = {
  cities: [],
  isFetching: false,
}

const citiesRequest = (state = INITIAL_STATE) => ({
  ...state,
  isFetching: true,
  cities: [],
})
const citiesSuccess = (state = INITIAL_STATE, { cities }) => ({
  ...state,
  isFetching: false,
  cities,
})
const citiesFailure = (state = INITIAL_STATE) => ({
  ...state,
  isFetching: false,
})

export default createReducer(INITIAL_STATE, {
  [Types.CITIES_REQUEST]: citiesRequest,
  [Types.CITIES_SUCCESS]: citiesSuccess,
  [Types.CITIES_FAILURE]: citiesFailure,
})
