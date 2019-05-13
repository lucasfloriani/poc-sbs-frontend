import { createActions, createReducer } from 'reduxsauce'

export const { Types, Creators } = createActions({
  gasStationsRequest: ['filter'],
  gasStationsSuccess: ['gasStations'],
  gasStationsFailure: null,
  getGasStationRequest: ['gasStationID'],
  getGasStationSuccess: ['gasStation'],
  getGasStationFailure: null,
  createGasStationRequest: ['gasStationData'],
  createGasStationSuccess: null,
  createGasStationFailure: null,
  updateGasStationRequest: ['gasStationData'],
  updateGasStationSuccess: null,
  updateGasStationFailure: null,
  updateGasStationsBookmark: ['bookmark'],
  deleteGasStationsBookmark: ['bookmark'],
})

const INITIAL_STATE = {
  gasStation: {},
  gasStations: [],
  isFetching: false,
}

// Get All GasStations
const gasStationsRequest = (state = INITIAL_STATE) => ({
  ...state,
  isFetching: true,
  gasStations: [],
})
const gasStationsSuccess = (state = INITIAL_STATE, { gasStations }) => ({
  ...state,
  isFetching: false,
  gasStations,
})
const gasStationsFailure = (state = INITIAL_STATE) => ({
  ...state,
  isFetching: false,
})
// Get GasStation
const getGasStationRequest = (state = INITIAL_STATE) => ({
  ...state,
  isFetching: true,
  gasStation: {},
})
const getGasStationSuccess = (state = INITIAL_STATE, { gasStation }) => ({
  ...state,
  isFetching: false,
  gasStation,
})
const getGasStationFailure = (state = INITIAL_STATE) => ({
  ...state,
  isFetching: false,
})
// Create GasStation
const createGasStationRequest = (state = INITIAL_STATE) => ({
  ...state,
  isFetching: true,
})
const createGasStationSuccess = (state = INITIAL_STATE) => ({
  ...state,
  isFetching: false,
})
const createGasStationFailure = (state = INITIAL_STATE) => ({
  ...state,
  isFetching: false,
})
// Update GasStation
const updateGasStationRequest = (state = INITIAL_STATE) => ({
  ...state,
  isFetching: true,
})
const updateGasStationSuccess = (state = INITIAL_STATE) => ({
  ...state,
  isFetching: false,
})
const updateGasStationFailure = (state = INITIAL_STATE) => ({
  ...state,
  isFetching: false,
})
// Another reducers
const updateGasStationsBookmark = (state = INITIAL_STATE, { bookmark }) => ({
  ...state,
  gasStations: state.gasStations.map(gasStation => gasStation.id.toString() !== bookmark.gas_station_id
    ? gasStation
    : { ...gasStation, bookmarks: [...gasStation.bookmarks, bookmark] }),
})
const deleteGasStationsBookmark = (state = INITIAL_STATE, { bookmark }) => {
  const updatedGasStations = state.gasStations.map((gasStation) => {
    if (gasStation.id !== bookmark.gas_station_id) return gasStation

    return {
      ...gasStation,
      bookmarks: gasStation.bookmarks.filter(stateBookmark => stateBookmark.id !== bookmark.id),
    }
  })

  return { ...state, gasStations: updatedGasStations }
}

export default createReducer(INITIAL_STATE, {
  [Types.GAS_STATIONS_REQUEST]: gasStationsRequest,
  [Types.GAS_STATIONS_SUCCESS]: gasStationsSuccess,
  [Types.GAS_STATIONS_FAILURE]: gasStationsFailure,
  [Types.GET_GAS_STATION_REQUEST]: getGasStationRequest,
  [Types.GET_GAS_STATION_SUCCESS]: getGasStationSuccess,
  [Types.GET_GAS_STATION_FAILURE]: getGasStationFailure,
  [Types.CREATE_GAS_STATION_REQUEST]: createGasStationRequest,
  [Types.CREATE_GAS_STATION_SUCCESS]: createGasStationSuccess,
  [Types.CREATE_GAS_STATION_FAILURE]: createGasStationFailure,
  [Types.UPDATE_GAS_STATION_REQUEST]: updateGasStationRequest,
  [Types.UPDATE_GAS_STATION_SUCCESS]: updateGasStationSuccess,
  [Types.UPDATE_GAS_STATION_FAILURE]: updateGasStationFailure,
  [Types.UPDATE_GAS_STATIONS_BOOKMARK]: updateGasStationsBookmark,
  [Types.DELETE_GAS_STATIONS_BOOKMARK]: deleteGasStationsBookmark,
})
