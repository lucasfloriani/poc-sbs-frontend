import { put, call } from 'redux-saga/effects'
import { cleanFalsy, encodeQueryData } from '@helpers/object'
import { Creators as AlertActions } from '../ducks/alert'
import { Creators as GasStationActions } from '../ducks/gasStation'
import api from '../../services'

export function* gasStationsRequest({ filter }) {
  try {
    const response = yield call(api.get, `gas-stations${encodeQueryData(cleanFalsy(filter))}`)
    yield put(GasStationActions.gasStationsSuccess(response.data))
  } catch (err) {
    console.log('SAGA GAS STATION ERR: ', err)
    yield put(GasStationActions.gasStationFailure())
    yield put(AlertActions.createErrorAlert('Erro ao carregar os postos de gasolina, tente novamente mais tarde'))
  }
}

export function* bookmarkedGasStationsRequest() {
  try {
    const response = yield call(api.get, 'users/gas-stations/bookmark')
    yield put(GasStationActions.bookmarkedGasStationsSuccess(response.data))
  } catch (err) {
    console.log('SAGA GAS STATION ERR: ', err)
    yield put(GasStationActions.bookmarkedGasStationsFailure())
    yield put(AlertActions.createErrorAlert('Erro ao carregar os favoritos, tente novamente mais tarde'))
  }
}

export function* complaintGasStationsRequest() {
  try {
    const response = yield call(api.get, 'users/gas-stations/complaint')
    yield put(GasStationActions.complaintGasStationsSuccess(response.data))
  } catch (err) {
    console.log('SAGA GAS STATION ERR: ', err)
    yield put(GasStationActions.complaintGasStationsFailure())
    yield put(AlertActions.createErrorAlert('Erro ao carregar as denúncias, tente novamente mais tarde'))
  }
}

export function* ratingGasStationsRequest() {
  try {
    const response = yield call(api.get, 'users/gas-stations/rating')
    yield put(GasStationActions.ratingGasStationsSuccess(response.data))
  } catch (err) {
    console.log('SAGA GAS STATION ERR: ', err)
    yield put(GasStationActions.ratingGasStationsFailure())
    yield put(AlertActions.createErrorAlert('Erro ao carregar as avaliações, tente novamente mais tarde'))
  }
}

export function* getGasStationRequest({ gasStationID }) {
  try {
    const response = yield call(api.get, `gas-stations/${gasStationID}`)
    yield put(GasStationActions.getGasStationSuccess(response.data))
  } catch (err) {
    console.log('SAGA GAS STATION ERR:', err)
    yield put(GasStationActions.getGasStationFailure())
    yield put(AlertActions.createErrorAlert('Erro ao carregar o posto de gasolina, verifique se a url esta correta'))
  }
}

export function* createGasStationRequest({ gasStationData }) {
  try {
    yield call(api.post, 'admin/gas-stations', gasStationData)
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
    const response = yield call(api.put, `admin/gas-stations/${gasStationData.id}`, gasStationData)
    yield put(GasStationActions.updateGasStationSuccess(response.data))
    yield put(AlertActions.createSuccessAlert('Posto atualizado com successo'))
  } catch (err) {
    console.log('SAGA GAS STATION ERR:', err)
    yield put(GasStationActions.updateGasStationFailure())
    yield put(AlertActions.createErrorAlert('Erro ao atualizar o posto de gasolina, verifique os campos e tente novamente'))
  }
}
