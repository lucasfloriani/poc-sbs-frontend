import { createActions, createReducer } from 'reduxsauce'

export const { Types, Creators } = createActions({
  createUserRequest: ['name', 'cpf', 'email', 'password'],
  createUserSuccess: null,
  createUserFailure: null,
  updateUserRequest: ['userData'],
  updateUserSuccess: ['user'],
  updateUserFailure: null,
  loginRequest: ['email', 'password'],
  loginSuccess: ['token', 'user'],
  loginFailure: null,
  logout: null,
  updateFuelType: ['fuelTypeName'],
  userLocationRequest: [],
  userLocationSuccess: ['cityID', 'stateID', 'latitude', 'longitude'],
  userLocationFailure: [],
})

const INITIAL_STATE = {
  isAuthenticated: !!sessionStorage.getItem('token'),
  isFetching: false,
  isFetchingLocation: false,
  token: sessionStorage.getItem('token') || '',
  fuelTypeName: 'Gasolina',
  user: (sessionStorage.getItem('user') && JSON.parse(sessionStorage.getItem('user'))) || {},
  userLocation: {
    cityID: '',
    stateID: '',
    latitude: '',
    longitude: '',
  },
}

// Create User
const createUserRequest = (state = INITIAL_STATE) => ({
  ...state,
  isFetching: true,
  isAuthenticated: false,
})
const createUserSuccess = (state = INITIAL_STATE) => ({
  ...state,
  isFetching: false,
})
const createUserFailure = (state = INITIAL_STATE) => ({
  ...state,
  isFetching: false,
})
// Update User
const updateUserRequest = (state = INITIAL_STATE) => ({
  ...state,
  isFetching: true,
})
const updateUserSuccess = (state = INITIAL_STATE, { user }) => ({
  ...state,
  isFetching: false,
  user: { ...state.user, ...user },
})
const updateUserFailure = (state = INITIAL_STATE) => ({
  ...state,
  isFetching: false,
})
// Login logic
const loginRequest = (state = INITIAL_STATE) => ({
  ...state,
  isFetching: true,
  isAuthenticated: false,
})
const loginSuccess = (state = INITIAL_STATE, { token, user }) => ({
  ...state,
  isFetching: false,
  isAuthenticated: true,
  token,
  user,
})
const loginFailure = (state = INITIAL_STATE) => ({
  ...state,
  isFetching: false,
  isAuthenticated: false,
})
const logout = () => {
  sessionStorage.removeItem('token')
  sessionStorage.removeItem('user')
  return {
    ...INITIAL_STATE,
    isAuthenticated: false,
    isFetching: false,
    token: '',
    user: {},
    fuelTypeName: 'Gasolina',
  }
}

// FuelType selected
const updateFuelType = (state = INITIAL_STATE, { fuelTypeName }) => ({
  ...state,
  fuelTypeName,
})
// UserLocation logic
const userLocationRequest = (state = INITIAL_STATE) => ({
  ...state,
  isFetchingLocation: true,
})
const userLocationSuccess = (state = INITIAL_STATE, {
  cityID, stateID, latitude, longitude,
}) => ({
  ...state,
  isFetchingLocation: false,
  userLocation: {
    cityID,
    stateID,
    latitude,
    longitude,
  },
})
const userLocationFailure = (state = INITIAL_STATE) => ({
  ...state,
  isFetchingLocation: false,
})

export default createReducer(INITIAL_STATE, {
  [Types.CREATE_USER_REQUEST]: createUserRequest,
  [Types.CREATE_USER_SUCCESS]: createUserSuccess,
  [Types.CREATE_USER_FAILURE]: createUserFailure,
  [Types.UPDATE_USER_REQUEST]: updateUserRequest,
  [Types.UPDATE_USER_SUCCESS]: updateUserSuccess,
  [Types.UPDATE_USER_FAILURE]: updateUserFailure,
  [Types.LOGIN_REQUEST]: loginRequest,
  [Types.LOGIN_SUCCESS]: loginSuccess,
  [Types.LOGIN_FAILURE]: loginFailure,
  [Types.LOGOUT]: logout,
  [Types.UPDATE_FUEL_TYPE]: updateFuelType,
  [Types.USER_LOCATION_REQUEST]: userLocationRequest,
  [Types.USER_LOCATION_SUCCESS]: userLocationSuccess,
  [Types.USER_LOCATION_FAILURE]: userLocationFailure,
})
