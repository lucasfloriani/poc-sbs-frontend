import { all, takeLatest } from 'redux-saga/effects'
import { loginRequest } from './auth'
import { Types as AuthTypes } from '../ducks/login'

export default function* root() {
  return yield all([
    takeLatest(AuthTypes.LOGIN_REQUEST, loginRequest),
  ])
}
