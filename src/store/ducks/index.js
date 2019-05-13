import { combineReducers } from 'redux'
import alert from './alert'
import auth from './auth'
import bookmark from './bookmark'
import city from './city'
import fuelType from './fuelType'
import gasStation from './gasStation'
import paymentType from './paymentType'
import priceFuel from './priceFuel'
import state from './state'

export default combineReducers({
  alert,
  auth,
  bookmark,
  city,
  fuelType,
  gasStation,
  priceFuel,
  paymentType,
  state,
})
