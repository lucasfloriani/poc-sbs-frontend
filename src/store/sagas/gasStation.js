import { put, call } from 'redux-saga/effects'
import { cleanFalsy, encodeQueryData } from '@helpers/object'
import { Creators as AlertActions } from '../ducks/alert'
import { Creators as GasStationActions } from '../ducks/gasStation'
import api from '../../services'

export function* gasStationsRequest({ filter }) {
  try {
    const response = yield call(api.get, `gas-stations${encodeQueryData(cleanFalsy(filter))}`)
    const gasStations = response.data
    yield put(GasStationActions.gasStationsSuccess(gasStations))
  } catch (err) {
    console.log('SAGA GAS STATION ERR: ', err)
    yield put(GasStationActions.gasStationFailure())
    yield put(AlertActions.createErrorAlert('Erro ao carregar os postos de gasolina, tente novamente mais tarde'))
  }
}

export function* getGasStationRequest({ gasStationID }) {
  try {
    const response = yield call(api.get, `gas-station/${gasStationID}`)
    const gasStation = response.data
    yield put(GasStationActions.getGasStationSuccess(gasStation))
  } catch (err) {
    console.log('SAGA GAS STATION ERR:', err)
    yield put(GasStationActions.getGasStationFailure())
    yield put(AlertActions.createErrorAlert('Erro ao carregar o posto de gasolina, verifique se a url esta correta'))
  }
}

export function* createGasStationRequest({ gasStationData }) {
  try {
    yield call(api.post, 'gas-stations', gasStationData)
    yield put(GasStationActions.createGasStationSuccess())
    yield put(AlertActions.createSuccessAlert('Posto criado com successo'))
  } catch (err) {
    console.log('SAGA GAS STATION ERR:', err)
    yield put(GasStationActions.createGasStationFailure())
    yield put(AlertActions.createErrorAlert('Erro ao criar o posto de gasolina, verifique os campos e tente novamente'))
  }
}

export function* updateGasStationRequest({ gasStationData }) {
  try {
    yield call(api.put, `gas-stations/${gasStationData.id}`, gasStationData)
    yield put(GasStationActions.updateGasStationSuccess())
    yield put(AlertActions.updateSuccessAlert('Posto atualizado com successo'))
  } catch (err) {
    console.log('SAGA GAS STATION ERR:', err)
    yield put(GasStationActions.updateGasStationFailure())
    yield put(AlertActions.updateErrorAlert('Erro ao atualizar o posto de gasolina, verifique os campos e tente novamente'))
  }
}
