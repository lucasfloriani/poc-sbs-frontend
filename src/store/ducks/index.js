import { combineReducers } from 'redux'
import alert from './alert'
import auth from './auth'
import city from './city'
import gasStation from './gasStation'
import state from './state'

export default combineReducers({
  alert,
  auth,
  city,
  gasStation,
  state,
})
