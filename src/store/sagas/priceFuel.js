import { put, call } from 'redux-saga/effects'
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
    yield put(AlertActions.createErrorAlert('Erro ao criar o preço de combustivel, verifique os campos e tente novamente'))
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
    yield put(AlertActions.createErrorAlert('Erro ao atualizar o preço de combustivel, verifique os campos e tente novamente'))
  }
}

export function* deletePriceFuelRequest({ priceFuelID }) {
  try {
    yield call(api.delete, `gas-stations/price-fuel/${priceFuelID}`)
    yield put(PriceFuelActions.deletePriceFuelSuccess())
    yield put(AlertActions.createSuccessAlert('Preço de combustivel excluido com successo'))
  } catch (err) {
    console.log('SAGA PRICE FUEL ERR:', err)
    yield put(PriceFuelActions.deletePriceFuelFailure())
    yield put(AlertActions.createErrorAlert('Erro ao excluir o preço de combustivel, tente novamente mais tarde'))
  }
}
