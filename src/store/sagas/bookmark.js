/* eslint-disable no-console */
import { put, call } from 'redux-saga/effects'
import { Creators as AlertActions } from '../ducks/alert'
import { Creators as BookmarkActions } from '../ducks/bookmark'
import { Creators as GasStationAction } from '../ducks/gasStation'
import api from '@service'

export function* bookmarksRequest() {
  try {
    const response = yield call(api.get, 'users/bookmarks')
    yield put(BookmarkActions.bookmarksSuccess(response.data))
  } catch (err) {
    console.log('SAGA BOOKMARK ERR: ', err)
    yield put(BookmarkActions.bookmarkFailure())
    yield put(AlertActions.createErrorAlert('Erro ao carregar os seus favoritos, tente novamente mais tarde'))
  }
}

export function* createBookmarkRequest({ bookmarkData }) {
  try {
    const response = yield call(api.post, 'users/bookmarks', bookmarkData)
    const bookmark = response.data
    yield put(BookmarkActions.createBookmarkSuccess(bookmark))
    yield put(GasStationAction.createGasStationsBookmark(bookmark))
    yield put(AlertActions.createSuccessAlert('Posto adicionado aos favoritos'))
  } catch (err) {
    console.log('SAGA BOOKMARK ERR:', err)
    yield put(BookmarkActions.createBookmarkFailure())
    yield put(AlertActions.createErrorAlert('Erro ao adicionar posto aos favoritos, tente novamente mais tarde'))
  }
}

export function* deleteBookmarkRequest({ bookmarkID }) {
  try {
    const response = yield call(api.delete, `users/bookmarks/${bookmarkID}`)
    yield put(BookmarkActions.deleteBookmarkSuccess(bookmarkID))
    yield put(GasStationAction.deleteGasStationsBookmark(response.data))
    yield put(AlertActions.createSuccessAlert('Posto removido dos favoritos'))
  } catch (err) {
    console.log('SAGA BOOKMARK ERR:', err)
    yield put(BookmarkActions.deleteBookmarkFailure())
    yield put(AlertActions.createErrorAlert('Erro ao remover postos dos favorito, tente novamente mais tarde'))
  }
}
