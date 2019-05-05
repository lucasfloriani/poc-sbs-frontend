import { all, takeLatest } from 'redux-saga/effects'
import { createUserRequest, loginRequest } from './auth'
import { citiesRequest } from './city'
import { gasStationsRequest } from './gasStation'
import { statesRequest } from './state'
import { Types as AuthTypes } from '../ducks/auth'
import { Types as CityTypes } from '../ducks/city'
import { Types as GasStationTypes } from '../ducks/gasStation'
import { Types as StatesTypes } from '../ducks/state'

export default function* root() {
  return yield all([
    takeLatest(AuthTypes.LOGIN_REQUEST, loginRequest),
    takeLatest(AuthTypes.CREATE_USER_REQUEST, createUserRequest),
    takeLatest(CityTypes.CITIES_REQUEST, citiesRequest),
    takeLatest(GasStationTypes.GAS_STATIONS_REQUEST, gasStationsRequest),
    takeLatest(StatesTypes.STATES_REQUEST, statesRequest),
  ])
}
