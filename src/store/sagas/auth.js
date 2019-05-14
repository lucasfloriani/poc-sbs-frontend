import { put, call } from 'redux-saga/effects'
import { accessType } from '@helpers/auth'
import { Creators as AlertActions } from '../ducks/alert'
import { Creators as AuthActions } from '../ducks/auth'
import api from '../../services'

export function* loginRequest({ email, password }) {
  try {
    const response = yield call(api.post, 'authenticate', { email, password })
    const { token, user } = response.data
    const userInfo = { ...user, type: accessType(user) }
    if (!token) throw new Error('Token de acesso é inválido')
    sessionStorage.setItem('token', token.token)
    sessionStorage.setItem('user', JSON.stringify(userInfo))
    yield put(AuthActions.loginSuccess(token.token, userInfo))
    yield put(AlertActions.createSuccessAlert('Login realizado com successo'))
  } catch (err) {
    console.log('SAGA LOGIN ERR: ', err)
    yield put(AuthActions.loginFailure())
    yield put(AlertActions.createErrorAlert('Erro ao realizar o login, verifique o e-mail e a senha'))
  }
}

export function* createUserRequest({
  name, cpf, email, password,
}) {
  try {
    const response = yield call(api.post, 'users', {
      name, cpf, email, password,
    })
    const { token, user } = response.data
    const userInfo = { ...user, type: accessType(user) }
    if (!token) throw new Error('Token de acesso é inválido')
    sessionStorage.setItem('token', token.token)
    sessionStorage.setItem('user', JSON.stringify(userInfo))
    yield put(AuthActions.createUserSuccess(token.token, userInfo))
    yield put(AlertActions.createSuccessAlert('Conta criada com successo'))
  } catch (err) {
    console.log('SAGA CREATE USER ACCOUNT ERR:', err)
    yield put(AuthActions.createUserFailure())
    yield put(AlertActions.createErrorAlert('Erro ao criar a conta, tente novamente mais tarde'))
  }
}

export function* updateUserRequest({ userData }) {
  try {
    const response = yield call(api.put, `users/${userData.id}`, userData)
    const user = response.data
    const storageUser = JSON.parse(sessionStorage.getItem('user'))
    sessionStorage.setItem('user', JSON.stringify({ ...storageUser, ...user }))
    yield put(AuthActions.updateUserSuccess(user))
    yield put(AlertActions.createSuccessAlert('Conta atualizada com successo'))
  } catch (err) {
    console.log('SAGA UPDATE USER ACCOUNT ERR:', err)
    yield put(AuthActions.createUserFailure())
    yield put(AlertActions.createErrorAlert('Erro ao atualizar a conta, tente novamente mais tarde'))
  }
}
