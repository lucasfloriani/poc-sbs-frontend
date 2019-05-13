import { all, takeLatest } from 'redux-saga/effects'
import { createUserRequest, loginRequest } from './auth'
import { bookmarksRequest, createBookmarkRequest, deleteBookmarkRequest } from './bookmark'
import { citiesRequest } from './city'
import { fuelTypesRequest } from './fuelType'
import {
  gasStationsRequest,
  getGasStationRequest,
  createGasStationRequest,
  updateGasStationRequest,
} from './gasStation'
import { paymentTypesRequest } from './paymentType'
import {
  priceFuelsRequest,
  getPriceFuelRequest,
  createPriceFuelRequest,
  updatePriceFuelRequest,
  deletePriceFuelRequest,
} from './priceFuel'
import {
  getRatingRequest,
  createRatingRequest,
  updateRatingRequest,
  deleteRatingRequest,
} from './rating'
import { statesRequest } from './state'

import { Types as AuthTypes } from '../ducks/auth'
import { Types as BookmarkTypes } from '../ducks/bookmark'
import { Types as CityTypes } from '../ducks/city'
import { Types as FuelTypes } from '../ducks/fuelType'
import { Types as GasStationTypes } from '../ducks/gasStation'
import { Types as PaymentTypes } from '../ducks/paymentType'
import { Types as PriceFuelTypes } from '../ducks/priceFuel'
import { Types as RatingTypes } from '../ducks/rating'
import { Types as StatesTypes } from '../ducks/state'

export default function* root() {
  return yield all([
    takeLatest(AuthTypes.LOGIN_REQUEST, loginRequest),
    takeLatest(AuthTypes.CREATE_USER_REQUEST, createUserRequest),

    takeLatest(BookmarkTypes.BOOKMARKS_REQUEST, bookmarksRequest),
    takeLatest(BookmarkTypes.CREATE_BOOKMARK_REQUEST, createBookmarkRequest),
    takeLatest(BookmarkTypes.DELETE_BOOKMARK_REQUEST, deleteBookmarkRequest),

    takeLatest(CityTypes.CITIES_REQUEST, citiesRequest),

    takeLatest(FuelTypes.FUEL_TYPES_REQUEST, fuelTypesRequest),

    takeLatest(GasStationTypes.GAS_STATIONS_REQUEST, gasStationsRequest),
    takeLatest(GasStationTypes.GET_GAS_STATION_REQUEST, getGasStationRequest),
    takeLatest(GasStationTypes.CREATE_GAS_STATION_REQUEST, createGasStationRequest),
    takeLatest(GasStationTypes.UPDATE_GAS_STATION_REQUEST, updateGasStationRequest),

    takeLatest(PaymentTypes.PAYMENT_TYPES_REQUEST, paymentTypesRequest),

    takeLatest(PriceFuelTypes.PRICE_FUELS_REQUEST, priceFuelsRequest),
    takeLatest(PriceFuelTypes.GET_PRICE_FUEL_REQUEST, getPriceFuelRequest),
    takeLatest(PriceFuelTypes.CREATE_PRICE_FUEL_REQUEST, createPriceFuelRequest),
    takeLatest(PriceFuelTypes.UPDATE_PRICE_FUEL_REQUEST, updatePriceFuelRequest),
    takeLatest(PriceFuelTypes.DELETE_PRICE_FUEL_REQUEST, deletePriceFuelRequest),

    takeLatest(RatingTypes.GET_RATING_REQUEST, getRatingRequest),
    takeLatest(RatingTypes.CREATE_RATING_REQUEST, createRatingRequest),
    takeLatest(RatingTypes.UPDATE_RATING_REQUEST, updateRatingRequest),
    takeLatest(RatingTypes.DELETE_RATING_REQUEST, deleteRatingRequest),

    takeLatest(StatesTypes.STATES_REQUEST, statesRequest),
  ])
}
