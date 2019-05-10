import { createActions, createReducer } from 'reduxsauce'

export const { Types, Creators } = createActions({
  paymentTypesRequest: null,
  paymentTypesSuccess: ['paymentTypes'],
  paymentTypesFailure: null,
})

const INITIAL_STATE = {
  paymentTypes: [],
  isFetching: false,
}

const paymentTypesRequest = (state = INITIAL_STATE) => ({
  ...state,
  isFetching: true,
  paymentTypes: [],
})
const paymentTypesSuccess = (state = INITIAL_STATE, { paymentTypes }) => ({
  ...state,
  isFetching: false,
  paymentTypes,
})
const paymentTypesFailure = (state = INITIAL_STATE) => ({
  ...state,
  isFetching: false,
})

export default createReducer(INITIAL_STATE, {
  [Types.PAYMENT_TYPES_REQUEST]: paymentTypesRequest,
  [Types.PAYMENT_TYPES_SUCCESS]: paymentTypesSuccess,
  [Types.PAYMENT_TYPES_FAILURE]: paymentTypesFailure,
})
