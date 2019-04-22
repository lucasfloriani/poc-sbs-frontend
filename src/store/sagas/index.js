import { all, takeLatest } from 'redux-saga/effects'
import { createUserRequest, loginRequest } from './auth'
import { Types as AuthTypes } from '../ducks/auth'

export default function* root() {
  return yield all([
    takeLatest(AuthTypes.LOGIN_REQUEST, loginRequest),
    takeLatest(AuthTypes.CREATE_USER_REQUEST, createUserRequest),
  ])
}
