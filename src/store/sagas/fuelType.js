/* eslint-disable no-console */
import { put, call } from 'redux-saga/effects'
import { Creators as AlertActions } from '../ducks/alert'
import { Creators as FuelTypeActions } from '../ducks/fuelType'
import api from '@service'

export function* fuelTypesRequest() {
  try {
    const response = yield call(api.get, 'fuel-types')
    const fuelTypes = response.data.map(({ id, name }) => [name, id])
    yield put(FuelTypeActions.fuelTypesSuccess(fuelTypes))
  } catch (err) {
    console.log('SAGA FUELTYPE ERR: ', err)
    yield put(FuelTypeActions.fuelTypesFailure())
    yield put(AlertActions.createErrorAlert('Erro ao carregar os tipos de combustível'))
  }
}
