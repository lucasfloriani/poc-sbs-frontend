import { createActions, createReducer } from 'reduxsauce'

export const { Types, Creators } = createActions({
  gasStationsRequest: ['filter'],
  gasStationsSuccess: ['gasStations'],
  gasStationsFailure: null,
  adminGasStationsRequest: ['filter'],
  adminGasStationsSuccess: ['gasStations'],
  adminGasStationsFailure: null,
  bookmarkedGasStationsRequest: null,
  bookmarkedGasStationsSuccess: ['gasStations'],
  bookmarkedGasStationsFailure: null,
  ratingGasStationsRequest: null,
  ratingGasStationsSuccess: ['gasStations'],
  ratingGasStationsFailure: null,
  getGasStationRequest: ['gasStationID'],
  getGasStationSuccess: ['gasStation'],
  getGasStationFailure: null,
  createGasStationRequest: ['gasStationData'],
  createGasStationSuccess: null,
  createGasStationFailure: null,
  publicCreateGasStationRequest: ['gasStationData', 'successCallback'],
  publicCreateGasStationSuccess: null,
  publicCreateGasStationFailure: null,
  updateGasStationRequest: ['gasStationData'],
  updateGasStationSuccess: ['gasStation'],
  updateGasStationFailure: null,
  createGasStationsBookmark: ['bookmark'],
  deleteGasStationsBookmark: ['bookmark'],
  createGasStationsRating: ['rating'],
  updateGasStationsRating: ['rating'],
  deleteGasStationsRating: ['rating'],
  createGasStationsComplaint: ['complaint'],
  updateGasStationsComplaint: ['complaint'],
  deleteGasStationsComplaint: ['complaint'],
  gasStationRelatoryRequest: null,
  gasStationRelatorySuccess: null,
  gasStationRelatoryFailure: null,
})

const INITIAL_STATE = {
  bookmarkedGasStations: [],
  complaintGasStations: [],
  gasStation: {},
  gasStations: [],
  isFetching: false,
  ratingGasStations: [],
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
// Get All GasStations that only admins can see
const adminGasStationsRequest = (state = INITIAL_STATE) => ({
  ...state,
  isFetching: true,
  gasStations: [],
})
const adminGasStationsSuccess = (state = INITIAL_STATE, { gasStations }) => ({
  ...state,
  isFetching: false,
  gasStations,
})
const adminGasStationsFailure = (state = INITIAL_STATE) => ({
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
// Get All Rating GasStations
const ratingGasStationsRequest = (state = INITIAL_STATE) => ({
  ...state,
  isFetching: true,
})
const ratingGasStationsSuccess = (state = INITIAL_STATE, { gasStations }) => ({
  ...state,
  isFetching: false,
  ratingGasStations: gasStations,
})
const ratingGasStationsFailure = (state = INITIAL_STATE) => ({
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
// Public Create GasStation
const publicCreateGasStationRequest = (state = INITIAL_STATE) => ({
  ...state,
  isFetching: true,
})
const publicCreateGasStationSuccess = (state = INITIAL_STATE) => ({
  ...state,
  isFetching: false,
})
const publicCreateGasStationFailure = (state = INITIAL_STATE) => ({
  ...state,
  isFetching: false,
})
// Update GasStation
const updateGasStationRequest = (state = INITIAL_STATE) => ({
  ...state,
  isFetching: true,
})
const updateGasStationSuccess = (state = INITIAL_STATE, { gasStation }) => ({
  ...state,
  isFetching: false,
  gasStation,
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

  const updatedRatingGasStations = state.ratingGasStations.map((gasStation) => {
    if (gasStation.id !== rating.gas_station_id) return gasStation
    return {
      ...gasStation,
      ratings: gasStation.ratings.map(stateRating => stateRating.id !== rating.id
        ? stateRating
        : { ...stateRating, ...rating }),
    }
  })

  return {
    ...state,
    gasStations: updatedGasStations,
    ratingGasStations: updatedRatingGasStations,
  }
}
const deleteGasStationsRating = (state = INITIAL_STATE, { rating }) => {
  const updatedGasStations = state.gasStations.map((gasStation) => {
    if (gasStation.id !== rating.gas_station_id) return gasStation
    return {
      ...gasStation,
      ratings: gasStation.ratings.filter(stateRating => stateRating.id !== rating.id),
    }
  })

  const updatedRatingGasStations = state.ratingGasStations.filter((gasStation) => {
    if (gasStation.id !== rating.gas_station_id) return true
    return !gasStation.ratings.some(stateRating => stateRating.id === rating.id)
  })

  return {
    ...state,
    gasStations: updatedGasStations,
    ratingGasStations: updatedRatingGasStations,
  }
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

  const updatedComplaintGasStations = state.complaintGasStations.map((gasStation) => {
    if (gasStation.id !== complaint.gas_station_id) return gasStation
    return {
      ...gasStation,
      complaints: gasStation.complaints.map(stateComplaint => stateComplaint.id !== complaint.id
        ? stateComplaint
        : { ...stateComplaint, ...complaint }),
    }
  })

  return {
    ...state,
    complaintGasStations: updatedComplaintGasStations,
    gasStations: updatedGasStations,
  }
}
const deleteGasStationsComplaint = (state = INITIAL_STATE, { complaint }) => {
  const updatedGasStations = state.gasStations.map((gasStation) => {
    if (gasStation.id !== complaint.gas_station_id) return gasStation
    return {
      ...gasStation,
      complaints: gasStation.complaints.filter(stateComplaint => stateComplaint.id !== complaint.id),
    }
  })

  const updatedComplaintGasStations = state.complaintGasStations.filter((gasStation) => {
    if (gasStation.id !== complaint.gas_station_id) return true
    return !gasStation.complaints.some(stateComplaint => stateComplaint.id === complaint.id)
  })

  return {
    ...state,
    gasStations: updatedGasStations,
    complaintGasStations: updatedComplaintGasStations,
  }
}
// Gas Station Relatory
const gasStationRelatoryRequest = (state = INITIAL_STATE) => ({ ...state })
const gasStationRelatorySuccess = (state = INITIAL_STATE) => ({ ...state })
const gasStationRelatoryFailure = (state = INITIAL_STATE) => ({ ...state })

export default createReducer(INITIAL_STATE, {
  [Types.GAS_STATIONS_REQUEST]: gasStationsRequest,
  [Types.GAS_STATIONS_SUCCESS]: gasStationsSuccess,
  [Types.GAS_STATIONS_FAILURE]: gasStationsFailure,
  [Types.ADMIN_GAS_STATIONS_REQUEST]: adminGasStationsRequest,
  [Types.ADMIN_GAS_STATIONS_SUCCESS]: adminGasStationsSuccess,
  [Types.ADMIN_GAS_STATIONS_FAILURE]: adminGasStationsFailure,
  [Types.BOOKMARKED_GAS_STATIONS_REQUEST]: bookmarkedGasStationsRequest,
  [Types.BOOKMARKED_GAS_STATIONS_SUCCESS]: bookmarkedGasStationsSuccess,
  [Types.BOOKMARKED_GAS_STATIONS_FAILURE]: bookmarkedGasStationsFailure,
  [Types.RATING_GAS_STATIONS_REQUEST]: ratingGasStationsRequest,
  [Types.RATING_GAS_STATIONS_SUCCESS]: ratingGasStationsSuccess,
  [Types.RATING_GAS_STATIONS_FAILURE]: ratingGasStationsFailure,
  [Types.GET_GAS_STATION_REQUEST]: getGasStationRequest,
  [Types.GET_GAS_STATION_SUCCESS]: getGasStationSuccess,
  [Types.GET_GAS_STATION_FAILURE]: getGasStationFailure,
  [Types.CREATE_GAS_STATION_REQUEST]: createGasStationRequest,
  [Types.CREATE_GAS_STATION_SUCCESS]: createGasStationSuccess,
  [Types.CREATE_GAS_STATION_FAILURE]: createGasStationFailure,
  [Types.PUBLIC_CREATE_GAS_STATION_REQUEST]: publicCreateGasStationRequest,
  [Types.PUBLIC_CREATE_GAS_STATION_SUCCESS]: publicCreateGasStationSuccess,
  [Types.PUBLIC_CREATE_GAS_STATION_FAILURE]: publicCreateGasStationFailure,
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
  [Types.GAS_STATION_RELATORY_REQUEST]: gasStationRelatoryRequest,
  [Types.GAS_STATION_RELATORY_SUCCESS]: gasStationRelatorySuccess,
  [Types.GAS_STATION_RELATORY_FAILURE]: gasStationRelatoryFailure,
})
