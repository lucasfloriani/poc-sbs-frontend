import { put, call } from 'redux-saga/effects'
import { Creators as AlertActions } from '../ducks/alert'
import { Creators as StateActions } from '../ducks/state'
import api from '@service'

export function* statesRequest() {
  try {
    const response = yield call(api.get, 'states')
    const states = response.data.map(({ id, name }) => [name, id])
    yield put(StateActions.statesSuccess(states))
  } catch (err) {
    console.log('SAGA STATE ERR: ', err)
    yield put(StateActions.statesFailure())
    yield put(AlertActions.createErrorAlert('Erro ao carregar os estados, tente novamente mais tarde'))
  }
}
