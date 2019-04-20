import { createActions, createReducer } from 'reduxsauce'

export const { Types, Creators } = createActions({
  loginRequest: ['email', 'password'],
  loginSuccess: ['token', 'user'],
  loginFailure: ['err'],
  logout: [],
})

const INITIAL_STATE = {
  isAuthenticated: !!localStorage.getItem('token'),
  isFetching: false,
  token: localStorage.getItem('token') || '',
  user: {},
  errorMessage: '',
}

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
  failure: false,
  user,
})
const loginFailure = (state = INITIAL_STATE, { err }) => ({
  ...state,
  isFetching: false,
  isAuthenticated: false,
  failure: true,
  errorMessage: err,
})
const logout = () => {
  localStorage.removeItem('token')
  return INITIAL_STATE
}

export default createReducer(INITIAL_STATE, {
  [Types.LOGIN_REQUEST]: loginRequest,
  [Types.LOGIN_SUCCESS]: loginSuccess,
  [Types.LOGIN_FAILURE]: loginFailure,
  [Types.LOGOUT]: logout,
})
