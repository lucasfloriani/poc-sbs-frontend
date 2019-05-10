import { createActions, createReducer } from 'reduxsauce'

export const { Types, Creators } = createActions({
  fuelTypesRequest: null,
  fuelTypesSuccess: ['fuelTypes'],
  fuelTypesFailure: null,
})

const INITIAL_STATE = {
  fuelTypes: [],
  isFetching: false,
}

const fuelTypesRequest = (state = INITIAL_STATE) => ({
  ...state,
  isFetching: true,
  fuelTypes: [],
})
const fuelTypesSuccess = (state = INITIAL_STATE, { fuelTypes }) => ({
  ...state,
  isFetching: false,
  fuelTypes,
})
const fuelTypesFailure = (state = INITIAL_STATE) => ({
  ...state,
  isFetching: false,
})

export default createReducer(INITIAL_STATE, {
  [Types.FUEL_TYPES_REQUEST]: fuelTypesRequest,
  [Types.FUEL_TYPES_SUCCESS]: fuelTypesSuccess,
  [Types.FUEL_TYPES_FAILURE]: fuelTypesFailure,
})
