import uuidv4 from 'uuid/v4'
import { createActions, createReducer } from 'reduxsauce'

export const { Types, Creators } = createActions({
  createMultiErrorAlert: ['messages'],
  createErrorAlert: ['message'],
  createSuccessAlert: ['message'],
  removeAlert: ['id'],
})

const INITIAL_STATE = {
  alerts: [],
}

const createMultiErrorAlert = (state = INITIAL_STATE, { messages }) => ({
  ...state,
  alerts: [...state.alerts, ...messages.map(err => ({ id: uuidv4(), message: err, type: 'error' }))],
})
const createErrorAlert = (state = INITIAL_STATE, { message }) => ({
  ...state,
  alerts: [...state.alerts, { id: uuidv4(), message, type: 'error' }],
})
const createSuccessAlert = (state = INITIAL_STATE, { message }) => ({
  ...state,
  alerts: [...state.alerts, { id: uuidv4(), message, type: 'success' }],
})
const removeAlert = (state = INITIAL_STATE, { id }) => ({
  ...state,
  alerts: state.alerts.filter(alert => alert.id !== id),
})

export default createReducer(INITIAL_STATE, {
  [Types.CREATE_MULTI_ERROR_ALERT]: createMultiErrorAlert,
  [Types.CREATE_ERROR_ALERT]: createErrorAlert,
  [Types.CREATE_SUCCESS_ALERT]: createSuccessAlert,
  [Types.REMOVE_ALERT]: removeAlert,
})
