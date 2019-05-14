import { createActions, createReducer } from 'reduxsauce'

export const { Types, Creators } = createActions({
  setGasStationLocation: ['gasStationLocation'],
  clearGasStationLocation: null,
  gasStationsRequest: ['filter'],
  gasStationsSuccess: ['gasStations'],
  gasStationsFailure: null,
  bookmarkedGasStationsRequest: null,
  bookmarkedGasStationsSuccess: ['gasStations'],
  bookmarkedGasStationsFailure: null,
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
  createGasStationsComplaint: ['complaint'],
  updateGasStationsComplaint: ['complaint'],
  deleteGasStationsComplaint: ['complaint'],
})

const INITIAL_STATE = {
  bookmarkedGasStations: [],
  gasStationLocation: {
    location: '',
    name: '',
  },
  gasStation: {},
  gasStations: [],
  isFetching: false,
}

// GasStation location
const setGasStationLocation = (state = INITIAL_STATE, { gasStationLocation }) => ({
  ...state,
  gasStationLocation,
})
const clearGasStationLocation = (state = INITIAL_STATE) => ({
  ...state,
  gasStationLocation: {
    location: '',
    name: '',
  },
})
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
// Get All Bookmarked GasStations
const bookmarkedGasStationsRequest = (state = INITIAL_STATE) => ({
  ...state,
  isFetching: true,
})
const bookmarkedGasStationsSuccess = (state = INITIAL_STATE, { gasStations }) => ({
  ...state,
  isFetching: false,
  bookmarkedGasStations: gasStations,
})
const bookmarkedGasStationsFailure = (state = INITIAL_STATE) => ({
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

  const updatedBookmarkedGasStations = state.bookmarkedGasStations.filter((gasStation) => {
    if (gasStation.id !== bookmark.gas_station_id) return true
    return !gasStation.bookmarks.some(stateBookmark => stateBookmark.id === bookmark.id)
  })

  return {
    ...state,
    bookmarkedGasStations: updatedBookmarkedGasStations,
    gasStations: updatedGasStations,
  }
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
// Complaint updates
const createGasStationsComplaint = (state = INITIAL_STATE, { complaint }) => ({
  ...state,
  gasStations: state.gasStations.map(gasStation => gasStation.id.toString() !== complaint.gas_station_id
    ? gasStation
    : { ...gasStation, complaints: [...gasStation.complaints, complaint] }),
})
const updateGasStationsComplaint = (state = INITIAL_STATE, { complaint }) => {
  const updatedGasStations = state.gasStations.map((gasStation) => {
    if (gasStation.id !== complaint.gas_station_id) return gasStation

    return {
      ...gasStation,
      complaints: gasStation.complaints.map(stateComplaint => stateComplaint.id !== complaint.id
        ? stateComplaint
        : { ...stateComplaint, ...complaint }),
    }
  })

  return { ...state, gasStations: updatedGasStations }
}
const deleteGasStationsComplaint = (state = INITIAL_STATE, { complaint }) => {
  const updatedGasStations = state.gasStations.map((gasStation) => {
    if (gasStation.id !== complaint.gas_station_id) return gasStation

    return {
      ...gasStation,
      complaints: gasStation.complaints.filter(stateComplaint => stateComplaint.id !== complaint.id),
    }
  })

  return { ...state, gasStations: updatedGasStations }
}

export default createReducer(INITIAL_STATE, {
  [Types.SET_GAS_STATION_LOCATION]: setGasStationLocation,
  [Types.CLEAR_GAS_STATION_LOCATION]: clearGasStationLocation,
  [Types.GAS_STATIONS_REQUEST]: gasStationsRequest,
  [Types.GAS_STATIONS_SUCCESS]: gasStationsSuccess,
  [Types.GAS_STATIONS_FAILURE]: gasStationsFailure,
  [Types.BOOKMARKED_GAS_STATIONS_REQUEST]: bookmarkedGasStationsRequest,
  [Types.BOOKMARKED_GAS_STATIONS_SUCCESS]: bookmarkedGasStationsSuccess,
  [Types.BOOKMARKED_GAS_STATIONS_FAILURE]: bookmarkedGasStationsFailure,
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
  [Types.CREATE_GAS_STATIONS_COMPLAINT]: createGasStationsComplaint,
  [Types.UPDATE_GAS_STATIONS_COMPLAINT]: updateGasStationsComplaint,
  [Types.DELETE_GAS_STATIONS_COMPLAINT]: deleteGasStationsComplaint,
})
