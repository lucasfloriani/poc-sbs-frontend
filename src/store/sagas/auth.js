/* eslint-disable no-console */
import { call, put } from 'redux-saga/effects'
import { Creators as AlertActions } from '../ducks/alert'
import { Creators as AuthActions } from '../ducks/auth'
import { Creators as CityActions } from '../ducks/city'
import { Creators as StateActions } from '../ducks/state'
import api from '@service'
import { accessType } from '@helpers/auth'
import { getUserLocation } from '@helpers/geoLocation'
import { getRequestErrorsFromErrorObj } from '@helpers/error'

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
    yield put(AlertActions.createMultiErrorAlert(getRequestErrorsFromErrorObj(err)))
  }
}

export function* forgotPasswordRequest({ email }) {
  try {
    yield call(api.post, 'forgot-password', { email })
    yield put(AuthActions.forgotPasswordSuccess())
    yield put(AlertActions.createSuccessAlert(
      'Solicitado a troca da senha com successo, e-mail com o link da troca de senha chegará em breve',
    ))
  } catch (err) {
    console.log('SAGA LOGIN ERR: ', err)
    yield put(AuthActions.forgotPasswordFailure())
    yield put(AlertActions.createErrorAlert('Erro ao solicitar a troca da senha'))
  }
}

export function* recoveryPasswordRequest({ password, token }) {
  try {
    yield call(api.put, 'password-recovery', { password, token })
    yield put(AuthActions.recoveryPasswordSuccess())
    yield put(AlertActions.createSuccessAlert('Sucesso ao trocar a senha da conta'))
  } catch (err) {
    console.log('SAGA LOGIN ERR: ', err)
    yield put(AuthActions.recoveryPasswordFailure())
    yield put(AlertActions.createErrorAlert('Erro ao realizar a troca da senha'))
  }
}

export function* createUserRequest({
  name, cpf, email, password,
}) {
  try {
    yield call(api.post, 'users', {
      name, cpf, email, password,
    })
    yield put(AuthActions.createUserSuccess())
    yield put(AlertActions.createSuccessAlert('Conta criada com successo'))
  } catch (err) {
    console.log('SAGA CREATE USER ACCOUNT ERR:', err)
    yield put(AuthActions.createUserFailure())
    yield put(AlertActions.createMultiErrorAlert(getRequestErrorsFromErrorObj(err)))
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
    yield put(AlertActions.createMultiErrorAlert(getRequestErrorsFromErrorObj(err)))
  }
}

export function* userLocationRequest() {
  try {
    const location = yield call(getUserLocation)
    const { latitude = -26.244383377008926, longitude = -49.384092876981356 } = location.coords

    const stateResponse = yield call(api.get, 'states')
    const states = stateResponse.data.map(({ id, name }) => [name, id])

    const reverseGeoLocation = yield call(
      api.get,
      `https://nominatim.openstreetmap.org/reverse.php?lat=${latitude}&lon=${longitude}&format=json`,
    )
    const { state = 'Santa Catarina', town: city = 'São Bento do Sul' } = reverseGeoLocation.data.address
    const stateID = states.find(([name]) => name === state)[1]

    const cityResponse = yield call(api.get, `states/${stateID}/cities`)
    const cities = cityResponse.data.map(({ id, name }) => [name, id])
    const cityID = cities.find(([name]) => name === city)[1]

    yield put(StateActions.statesSuccess(states))
    yield put(CityActions.citiesSuccess(cities))
    yield put(AuthActions.userLocationSuccess(cityID, stateID, latitude, longitude))
  } catch (err) {
    console.log('SAGA USER LOCATION ERR:', err)
    yield put(StateActions.statesFailure())
    yield put(CityActions.citiesFailure())
    yield put(AuthActions.userLocationFailure())
    yield put(AlertActions.createErrorAlert(`
      Não foi possível buscar sua localização,libere o acesso para filtrar os postos e
      outras funcionalidades corretamente
    `))
  }
}
