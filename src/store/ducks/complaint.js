import { createActions, createReducer } from 'reduxsauce'

export const { Types, Creators } = createActions({
  complaintsRequest: null,
  complaintsSuccess: ['complaints'],
  complaintsFailure: null,
  createComplaintRequest: ['complaintData'],
  createComplaintSuccess: ['complaint'],
  createComplaintFailure: null,
  complaintRelatoryRequest: null,
  complaintRelatorySuccess: null,
  complaintRelatoryFailure: null,
})

const INITIAL_STATE = {
  complaints: [],
  complaint: {},
  isFetching: false,
}

// All Complaints
const complaintsRequest = (state = INITIAL_STATE) => ({
  ...state,
  isFetching: true,
  complaints: [],
})
const complaintsSuccess = (state = INITIAL_STATE, { complaints }) => ({
  ...state,
  isFetching: false,
  complaints,
})
const complaintsFailure = (state = INITIAL_STATE) => ({
  ...state,
  isFetching: false,
})

// Create Complaint
const createComplaintRequest = (state = INITIAL_STATE) => ({
  ...state,
  isFetching: true,
})
const createComplaintSuccess = (state = INITIAL_STATE, { complaint }) => ({
  ...state,
  isFetching: false,
  complaint,
})
const createComplaintFailure = (state = INITIAL_STATE) => ({
  ...state,
  isFetching: false,
})

// Complaint Relatory
const complaintRelatoryRequest = (state = INITIAL_STATE) => ({ ...state })
const complaintRelatorySuccess = (state = INITIAL_STATE) => ({ ...state })
const complaintRelatoryFailure = (state = INITIAL_STATE) => ({ ...state })

export default createReducer(INITIAL_STATE, {
  [Types.COMPLAINTS_REQUEST]: complaintsRequest,
  [Types.COMPLAINTS_SUCCESS]: complaintsSuccess,
  [Types.COMPLAINTS_FAILURE]: complaintsFailure,
  [Types.CREATE_COMPLAINT_REQUEST]: createComplaintRequest,
  [Types.CREATE_COMPLAINT_SUCCESS]: createComplaintSuccess,
  [Types.CREATE_COMPLAINT_FAILURE]: createComplaintFailure,
  [Types.COMPLAINT_RELATORY_REQUEST]: complaintRelatoryRequest,
  [Types.COMPLAINT_RELATORY_SUCCESS]: complaintRelatorySuccess,
  [Types.COMPLAINT_RELATORY_FAILURE]: complaintRelatoryFailure,
})
