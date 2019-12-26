/* eslint-disable no-console */
import { put, call } from 'redux-saga/effects'
import { Creators as AlertActions } from '../ducks/alert'
import { Creators as CityActions } from '../ducks/city'
import api from '@service'

export function* citiesRequest({ stateID }) {
  try {
    const response = yield call(api.get, `states/${stateID}/cities`)
    const cities = response.data
    yield put(CityActions.citiesSuccess(cities))
  } catch (err) {
    console.log('SAGA CITY ERR: ', err)
    yield put(CityActions.citiesFailure())
    yield put(AlertActions.createErrorAlert('Erro ao carregar as cidades do estado, tente novamente mais tarde'))
  }
}
