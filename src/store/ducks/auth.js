import { createActions, createReducer } from 'reduxsauce'

export const { Types, Creators } = createActions({
  createUserRequest: ['name', 'cpf', 'email', 'password'],
  createUserSuccess: ['token', 'user'],
  createUserFailure: null,
  loginRequest: ['email', 'password'],
  loginSuccess: ['token', 'user'],
  loginFailure: null,
  logout: null,
})

const INITIAL_STATE = {
  isAuthenticated: !!sessionStorage.getItem('token'),
  isFetching: false,
  token: sessionStorage.getItem('token') || '',
  user: (sessionStorage.getItem('user') && JSON.parse(sessionStorage.getItem('user'))) || {},
}

const createUserRequest = (state = INITIAL_STATE) => ({
  ...state,
  isFetching: true,
  isAuthenticated: false,
})
const createUserSuccess = (state = INITIAL_STATE, { token, user }) => ({
  ...state,
  isFetching: false,
  isAuthenticated: true,
  token,
  user,
})
const createUserFailure = (state = INITIAL_STATE) => ({
  ...state,
  isFetching: false,
  isAuthenticated: false,
})
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
    isAuthenticated: false,
    isFetching: false,
    token: '',
    user: {},
  }
}

export default createReducer(INITIAL_STATE, {
  [Types.CREATE_USER_REQUEST]: createUserRequest,
  [Types.CREATE_USER_SUCCESS]: createUserSuccess,
  [Types.CREATE_USER_FAILURE]: createUserFailure,
  [Types.LOGIN_REQUEST]: loginRequest,
  [Types.LOGIN_SUCCESS]: loginSuccess,
  [Types.LOGIN_FAILURE]: loginFailure,
  [Types.LOGOUT]: logout,
})
