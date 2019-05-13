import { put, call } from 'redux-saga/effects'
import { Creators as AlertActions } from '../ducks/alert'
import { Creators as RatingActions } from '../ducks/rating'
import api from '../../services'

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
    yield call(api.post, 'users/ratings', ratingData)
    yield put(RatingActions.createRatingSuccess())
    yield put(AlertActions.createSuccessAlert('Avaliação criada com successo'))
  } catch (err) {
    console.log('SAGA RATING ERR:', err)
    yield put(RatingActions.createRatingFailure())
    yield put(AlertActions.createErrorAlert('Erro ao criar a avaliação do posto, tente novamente mais tarde'))
  }
}

export function* updateRatingRequest({ ratingData }) {
  try {
    const response = yield call(api.put, `users/ratings/${ratingData.id}`, ratingData)
    yield put(RatingActions.updateRatingSuccess(response.data))
    yield put(AlertActions.createSuccessAlert('Avaliação atualizada com successo'))
  } catch (err) {
    console.log('SAGA RATING ERR:', err)
    yield put(RatingActions.updateRatingFailure())
    yield put(AlertActions.createErrorAlert('Erro ao atualizar a avaliação do posto, tente novamente mais tarde'))
  }
}

export function* deleteRatingRequest({ ratingID }) {
  try {
    yield call(api.delete, `users/ratings/${ratingID}`)
    yield put(RatingActions.deleteRatingSuccess(ratingID))
    yield put(AlertActions.createSuccessAlert('Avaliação excluida com successo'))
  } catch (err) {
    console.log('SAGA RATING ERR:', err)
    yield put(RatingActions.deleteRatingFailure())
    yield put(AlertActions.createErrorAlert('Erro ao excluir a avaliação do posto, tente novamente mais tarde'))
  }
}
