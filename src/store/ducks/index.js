import { combineReducers } from 'redux'
import alert from './alert'
import login from './login'

export default combineReducers({
  alert,
  login,
})
