import { put, call } from 'redux-saga/effects'
import { Creators as AuthActions } from '../ducks/login'
import api from '../../services'

export function* loginRequest({ email, password }) {
  try {
    const { token, user } = yield call(api.post, 'authenticate', { email, password })
    localStorage.setItem('token', token)
    yield put(AuthActions.loginSuccess(token, user))
    console.log('SAGA LOGIN SUCCESS')
  } catch (err) {
    console.log('SAGA LOGIN ERR: ', err)
    yield put(AuthActions.loginFailure(err.status))
  }
}
