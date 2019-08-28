import { put, call } from 'redux-saga/effects'
import { getRequestErrorsFromErrorObj } from '@helpers/error'
import FileSaver from 'file-saver'
import { Creators as AlertActions } from '../ducks/alert'
import { Creators as PriceFuelActions } from '../ducks/priceFuel'
import api from '../../services'

export function* priceFuelsRequest({ gasStationID }) {
  try {
    const response = yield call(api.get, `gas-stations/${gasStationID}/price-fuels`)
    yield put(PriceFuelActions.priceFuelsSuccess(response.data))
  } catch (err) {
    console.log('SAGA CITY ERR: ', err)
    yield put(PriceFuelActions.priceFuelsFailure())
    yield put(AlertActions.createErrorAlert('Erro ao carregar os preços de combustivel, tente novamente mais tarde'))
  }
}

export function* getPriceFuelRequest({ priceFuelID }) {
  try {
    const response = yield call(api.get, `gas-stations/price-fuel/${priceFuelID}`)
    yield put(PriceFuelActions.getPriceFuelSuccess(response.data))
  } catch (err) {
    console.log('SAGA PRICE FUEL ERR:', err)
    yield put(PriceFuelActions.getPriceFuelFailure())
    yield put(AlertActions.createErrorAlert('Erro ao carregar o preço de combustivel'))
  }
}

export function* createPriceFuelRequest({ priceFuelData }) {
  try {
    yield call(api.post, 'gas-stations/price-fuel', priceFuelData)
    yield put(PriceFuelActions.createPriceFuelSuccess())
    yield put(AlertActions.createSuccessAlert('Preço de combustivel criado com successo'))
  } catch (err) {
    console.log('SAGA PRICE FUEL ERR:', err)
    yield put(PriceFuelActions.createPriceFuelFailure())
    yield put(AlertActions.createMultiErrorAlert(getRequestErrorsFromErrorObj(err)))
  }
}

export function* updatePriceFuelRequest({ priceFuelData }) {
  try {
    const response = yield call(api.put, `gas-stations/price-fuel/${priceFuelData.id}`, priceFuelData)
    yield put(PriceFuelActions.updatePriceFuelSuccess(response.data))
    yield put(AlertActions.createSuccessAlert('Preço de combustivel atualizado com successo'))
  } catch (err) {
    console.log('SAGA PRICE FUEL ERR:', err)
    yield put(PriceFuelActions.updatePriceFuelFailure())
    yield put(AlertActions.createMultiErrorAlert(getRequestErrorsFromErrorObj(err)))
  }
}

export function* deletePriceFuelRequest({ priceFuelID }) {
  try {
    yield call(api.delete, `gas-stations/price-fuel/${priceFuelID}`)
    yield put(PriceFuelActions.deletePriceFuelSuccess(priceFuelID))
    yield put(AlertActions.createSuccessAlert('Preço de combustivel excluido com successo'))
  } catch (err) {
    console.log('SAGA PRICE FUEL ERR:', err)
    yield put(PriceFuelActions.deletePriceFuelFailure())
    yield put(AlertActions.createErrorAlert('Erro ao excluir o preço de combustivel, tente novamente mais tarde'))
  }
}

export function* priceFuelHistoryRelatoryRequest() {
  try {
    const requestOptions = { headers: { Accept: 'application/xls', 'Content-Type': 'application/xls' } }
    const response = yield call(api.get, 'admin/price-fuel-history/relatory', requestOptions)
    const blob = new Blob([response.data], { type: 'application/xls' })
    FileSaver.saveAs(blob, 'relatorio-de-historico-de-precos.xls')
    yield put(PriceFuelActions.priceFuelHistoryRelatorySuccess())
  } catch (err) {
    console.log('SAGA COMPLAINT ERR: ', err)
    yield put(PriceFuelActions.priceFuelHistoryRelatoryFailure())
    yield put(AlertActions.createErrorAlert('Erro ao baixar o relatório de histórico de preços, tente novamente mais tarde'))
  }
}
