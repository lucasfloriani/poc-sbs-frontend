import { combineReducers } from 'redux'
import alert from './alert'
import auth from './auth'
import bookmark from './bookmark'
import city from './city'
import complaint from './complaint'
import fuelType from './fuelType'
import gasStation from './gasStation'
import paymentType from './paymentType'
import priceFuel from './priceFuel'
import rating from './rating'
import state from './state'

export default combineReducers({
  alert,
  auth,
  bookmark,
  city,
  complaint,
  fuelType,
  gasStation,
  priceFuel,
  paymentType,
  rating,
  state,
})
