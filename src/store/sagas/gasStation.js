import { put, call } from 'redux-saga/effects'
import { cleanFalsy, encodeQueryData } from '@helpers/object'
import { Creators as AlertActions } from '../ducks/alert'
import { Creators as GasStationActions } from '../ducks/gasStation'
import api from '../../services'

export function* gasStationsRequest({ filter }) {
  try {
    console.log(filter)
    const response = yield call(api.get, `gas-stations${encodeQueryData(cleanFalsy(filter))}`)
    const gasStations = response.data
    yield put(GasStationActions.gasStationsSuccess(gasStations))
  } catch (err) {
    console.log('SAGA GAS STATION ERR: ', err)
    yield put(GasStationActions.gasStationFailure())
    yield put(AlertActions.createErrorAlert('Erro ao carregar os postos de gasolina, tente novamente mais tarde'))
  }
}
