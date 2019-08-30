import { put, call } from 'redux-saga/effects'
import { getRequestErrorsFromErrorObj } from '@helpers/error'
import FileSaver from 'file-saver'
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
    yield put(AlertActions.createErrorAlert('Erro ao carregar os postos de combustível, tente novamente mais tarde'))
  }
}

export function* adminGasStationsRequest({ filter }) {
  try {
    const response = yield call(api.get, `admin/gas-stations${encodeQueryData(cleanFalsy(filter))}`)
    yield put(GasStationActions.adminGasStationsSuccess(response.data))
  } catch (err) {
    console.log('SAGA GAS STATION ERR: ', err)
    yield put(GasStationActions.adminGasStationFailure())
    yield put(AlertActions.createErrorAlert('Erro ao carregar os postos de combustível, tente novamente mais tarde'))
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
    yield put(AlertActions.createErrorAlert('Erro ao carregar o posto de combustível, verifique se a url esta correta'))
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
    yield put(AlertActions.createMultiErrorAlert(getRequestErrorsFromErrorObj(err)))
  }
}

export function* publicCreateGasStationRequest({ gasStationData, successCallback }) {
  try {
    yield call(api.post, 'gas-stations', gasStationData)
    yield put(GasStationActions.publicCreateGasStationSuccess())
    yield put(AlertActions.createSuccessAlert(
      'Pedido para criação da conta do posto de combustível foi enviado com sucesso'
    ))
    successCallback()
  } catch (err) {
    console.log('SAGA GAS STATION ERR:', err)
    yield put(GasStationActions.publicCreateGasStationFailure())
    yield put(AlertActions.createMultiErrorAlert(getRequestErrorsFromErrorObj(err)))
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
    yield put(AlertActions.createMultiErrorAlert(getRequestErrorsFromErrorObj(err)))
  }
}

export function* gasStationRelatoryRequest() {
  try {
    const requestOptions = { headers: { Accept: 'application/xls', 'Content-Type': 'application/xls' } }
    const response = yield call(api.get, 'admin/gas-stations/relatory', requestOptions)
    const blob = new Blob([response.data], { type: 'application/xls' })
    FileSaver.saveAs(blob, 'relatorio-de-postos.xls')
    yield put(GasStationActions.gasStationRelatorySuccess())
  } catch (err) {
    console.log('SAGA GAS STATION ERR: ', err)
    yield put(GasStationActions.gasStationRelatoryFailure())
    yield put(AlertActions.createErrorAlert('Erro ao baixar o relatório dos postos de combustível, tente novamente mais tarde'))
  }
}
