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
  createGasStationsBookmark: ['bookmark'],
  deleteGasStationsBookmark: ['bookmark'],
  createGasStationsRating: ['rating'],
  updateGasStationsRating: ['rating'],
  deleteGasStationsRating: ['rating'],
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
// Bookmark updates
const createGasStationsBookmark = (state = INITIAL_STATE, { bookmark }) => ({
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
// Rating updates
const createGasStationsRating = (state = INITIAL_STATE, { rating }) => ({
  ...state,
  gasStations: state.gasStations.map(gasStation => gasStation.id.toString() !== rating.gas_station_id
    ? gasStation
    : { ...gasStation, ratings: [...gasStation.ratings, rating] }),
})
const updateGasStationsRating = (state = INITIAL_STATE, { rating }) => {
  const updatedGasStations = state.gasStations.map((gasStation) => {
    if (gasStation.id !== rating.gas_station_id) return gasStation

    return {
      ...gasStation,
      ratings: gasStation.ratings.map(stateRating => stateRating.id !== rating.id
        ? stateRating
        : { ...stateRating, ...rating }),
    }
  })

  return { ...state, gasStations: updatedGasStations }
}
const deleteGasStationsRating = (state = INITIAL_STATE, { rating }) => {
  const updatedGasStations = state.gasStations.map((gasStation) => {
    if (gasStation.id !== rating.gas_station_id) return gasStation

    return {
      ...gasStation,
      ratings: gasStation.ratings.filter(stateRating => stateRating.id !== rating.id),
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
  [Types.CREATE_GAS_STATIONS_BOOKMARK]: createGasStationsBookmark,
  [Types.DELETE_GAS_STATIONS_BOOKMARK]: deleteGasStationsBookmark,
  [Types.CREATE_GAS_STATIONS_RATING]: createGasStationsRating,
  [Types.UPDATE_GAS_STATIONS_RATING]: updateGasStationsRating,
  [Types.DELETE_GAS_STATIONS_RATING]: deleteGasStationsRating,
})
