import { createActions, createReducer } from 'reduxsauce'


export const { Types, Creators } = createActions({
  priceFuelsRequest: ['gasStationID'],
  priceFuelsSuccess: ['priceFuels'],
  priceFuelsFailure: null,
  getPriceFuelRequest: ['priceFuelID'],
  getPriceFuelSuccess: ['priceFuel'],
  getPriceFuelFailure: null,
  createPriceFuelRequest: ['priceFuelData'],
  createPriceFuelSuccess: null,
  createPriceFuelFailure: null,
  updatePriceFuelRequest: ['priceFuelData'],
  updatePriceFuelSuccess: ['priceFuel'],
  updatePriceFuelFailure: null,
  deletePriceFuelRequest: ['priceFuelID'],
  deletePriceFuelSuccess: null,
  deletePriceFuelFailure: null,
})

const INITIAL_STATE = {
  priceFuel: {},
  priceFuels: [],
  isFetching: false,
}

// Get All GasStations
const priceFuelsRequest = (state = INITIAL_STATE) => ({
  ...state,
  isFetching: true,
  priceFuels: [],
})
const priceFuelsSuccess = (state = INITIAL_STATE, { priceFuels }) => ({
  ...state,
  isFetching: false,
  priceFuels,
})
const priceFuelsFailure = (state = INITIAL_STATE) => ({
  ...state,
  isFetching: false,
})
// Get PriceFuel
const getPriceFuelRequest = (state = INITIAL_STATE) => ({
  ...state,
  isFetching: true,
  priceFuel: {},
})
const getPriceFuelSuccess = (state = INITIAL_STATE, { priceFuel }) => ({
  ...state,
  isFetching: false,
  priceFuel,
})
const getPriceFuelFailure = (state = INITIAL_STATE) => ({
  ...state,
  isFetching: false,
})
// Create PriceFuel
const createPriceFuelRequest = (state = INITIAL_STATE) => ({
  ...state,
  isFetching: true,
})
const createPriceFuelSuccess = (state = INITIAL_STATE) => ({
  ...state,
  isFetching: false,
})
const createPriceFuelFailure = (state = INITIAL_STATE) => ({
  ...state,
  isFetching: false,
})
// Update PriceFuel
const updatePriceFuelRequest = (state = INITIAL_STATE) => ({
  ...state,
  isFetching: true,
})
const updatePriceFuelSuccess = (state = INITIAL_STATE, { priceFuel }) => ({
  ...state,
  isFetching: false,
  priceFuel,
})
const updatePriceFuelFailure = (state = INITIAL_STATE) => ({
  ...state,
  isFetching: false,
})
// Delete PriceFuel
const deletePriceFuelRequest = (state = INITIAL_STATE) => ({
  ...state,
  isFetching: true,
})
const deletePriceFuelSuccess = (state = INITIAL_STATE) => ({
  ...state,
  isFetching: false,
})
const deletePriceFuelFailure = (state = INITIAL_STATE) => ({
  ...state,
  isFetching: false,
})

export default createReducer(INITIAL_STATE, {
  [Types.PRICE_FUELS_REQUEST]: priceFuelsRequest,
  [Types.PRICE_FUELS_SUCCESS]: priceFuelsSuccess,
  [Types.PRICE_FUELS_FAILURE]: priceFuelsFailure,
  [Types.GET_PRICE_FUEL_REQUEST]: getPriceFuelRequest,
  [Types.GET_PRICE_FUEL_SUCCESS]: getPriceFuelSuccess,
  [Types.GET_PRICE_FUEL_FAILURE]: getPriceFuelFailure,
  [Types.CREATE_PRICE_FUEL_REQUEST]: createPriceFuelRequest,
  [Types.CREATE_PRICE_FUEL_SUCCESS]: createPriceFuelSuccess,
  [Types.CREATE_PRICE_FUEL_FAILURE]: createPriceFuelFailure,
  [Types.UPDATE_PRICE_FUEL_REQUEST]: updatePriceFuelRequest,
  [Types.UPDATE_PRICE_FUEL_SUCCESS]: updatePriceFuelSuccess,
  [Types.UPDATE_PRICE_FUEL_FAILURE]: updatePriceFuelFailure,
  [Types.DELETE_PRICE_FUEL_REQUEST]: deletePriceFuelRequest,
  [Types.DELETE_PRICE_FUEL_SUCCESS]: deletePriceFuelSuccess,
  [Types.DELETE_PRICE_FUEL_FAILURE]: deletePriceFuelFailure,
})
