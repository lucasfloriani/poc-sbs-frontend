/* eslint-disable no-console */
import { put, call } from 'redux-saga/effects'
import { Creators as AlertActions } from '../ducks/alert'
import { Creators as RatingActions } from '../ducks/rating'
import { Creators as GasStationAction } from '../ducks/gasStation'
import api from '@service'
import { getRequestErrorsFromErrorObj } from '@helpers/error'

export function* getRatingRequest({ ratingID }) {
  try {
    const response = yield call(api.get, `users/ratings/${ratingID}`)
    yield put(RatingActions.getRatingSuccess(response.data))
  } catch (err) {
    console.log('SAGA RATING ERR:', err)
    yield put(RatingActions.getRatingFailure())
    yield put(AlertActions.createErrorAlert('Erro ao carregar a avaliação do posto'))
  }
}

export function* createRatingRequest({ ratingData }) {
  try {
    const response = yield call(api.post, 'users/ratings', ratingData)
    const rating = response.data
    yield put(RatingActions.createRatingSuccess(rating))
    yield put(GasStationAction.createGasStationsRating(rating))
    yield put(AlertActions.createSuccessAlert('Avaliação criada com successo'))
  } catch (err) {
    console.log('SAGA RATING ERR:', err)
    yield put(RatingActions.createRatingFailure())
    yield put(AlertActions.createMultiErrorAlert(getRequestErrorsFromErrorObj(err)))
  }
}

export function* updateRatingRequest({ ratingData }) {
  try {
    const response = yield call(api.put, `users/ratings/${ratingData.id}`, ratingData)
    const rating = response.data
    yield put(RatingActions.updateRatingSuccess(rating))
    yield put(GasStationAction.updateGasStationsRating(rating))
    yield put(AlertActions.createSuccessAlert('Avaliação atualizada com successo'))
  } catch (err) {
    console.log('SAGA RATING ERR:', err)
    yield put(RatingActions.updateRatingFailure())
    yield put(AlertActions.createMultiErrorAlert(getRequestErrorsFromErrorObj(err)))
  }
}

export function* deleteRatingRequest({ ratingID }) {
  try {
    const response = yield call(api.delete, `users/ratings/${ratingID}`)
    yield put(RatingActions.deleteRatingSuccess(ratingID))
    yield put(GasStationAction.deleteGasStationsRating(response.data))
    yield put(AlertActions.createSuccessAlert('Avaliação excluida com successo'))
  } catch (err) {
    console.log('SAGA RATING ERR:', err)
    yield put(RatingActions.deleteRatingFailure())
    yield put(AlertActions.createErrorAlert('Erro ao excluir a avaliação do posto, tente novamente mais tarde'))
  }
}
