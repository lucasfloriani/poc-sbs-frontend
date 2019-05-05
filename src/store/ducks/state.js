import { createActions, createReducer } from 'reduxsauce'

export const { Types, Creators } = createActions({
  statesRequest: null,
  statesSuccess: ['states'],
  statesFailure: null,
})

const INITIAL_STATE = {
  states: [],
  isFetching: false,
}

const statesRequest = (state = INITIAL_STATE) => ({
  ...state,
  isFetching: true,
  states: [],
})
const statesSuccess = (state = INITIAL_STATE, { states }) => ({
  ...state,
  isFetching: false,
  states,
})
const statesFailure = (state = INITIAL_STATE) => ({
  ...state,
  isFetching: false,
})

export default createReducer(INITIAL_STATE, {
  [Types.STATES_REQUEST]: statesRequest,
  [Types.STATES_SUCCESS]: statesSuccess,
  [Types.STATES_FAILURE]: statesFailure,
})
