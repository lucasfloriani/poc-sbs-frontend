import { createActions, createReducer } from 'reduxsauce'


export const { Types, Creators } = createActions({
  complaintsRequest: null,
  complaintsSuccess: ['complaints'],
  complaintsFailure: null,
  getComplaintRequest: ['complaintID'],
  getComplaintSuccess: ['complaint'],
  getComplaintFailure: null,
  createComplaintRequest: ['complaintData'],
  createComplaintSuccess: ['complaint'],
  createComplaintFailure: null,
  updateComplaintRequest: ['complaintData'],
  updateComplaintSuccess: ['complaint'],
  updateComplaintFailure: null,
  deleteComplaintRequest: ['complaintID'],
  deleteComplaintSuccess: null,
  deleteComplaintFailure: null,
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

// Get Complaint
const getComplaintRequest = (state = INITIAL_STATE) => ({
  ...state,
  isFetching: true,
  complaint: {},
})
const getComplaintSuccess = (state = INITIAL_STATE, { complaint }) => ({
  ...state,
  isFetching: false,
  complaint,
})
const getComplaintFailure = (state = INITIAL_STATE) => ({
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
// Update Complaint
const updateComplaintRequest = (state = INITIAL_STATE) => ({
  ...state,
  isFetching: true,
})
const updateComplaintSuccess = (state = INITIAL_STATE, { complaint }) => ({
  ...state,
  isFetching: false,
  complaint,
})
const updateComplaintFailure = (state = INITIAL_STATE) => ({
  ...state,
  isFetching: false,
})
// Delete Complaint
const deleteComplaintRequest = (state = INITIAL_STATE) => ({
  ...state,
  isFetching: true,
})
const deleteComplaintSuccess = (state = INITIAL_STATE) => ({
  ...state,
  isFetching: false,
  complaint: {},
})
const deleteComplaintFailure = (state = INITIAL_STATE) => ({
  ...state,
  isFetching: false,
})

export default createReducer(INITIAL_STATE, {
  [Types.COMPLAINTS_REQUEST]: complaintsRequest,
  [Types.COMPLAINTS_SUCCESS]: complaintsSuccess,
  [Types.COMPLAINTS_FAILURE]: complaintsFailure,
  [Types.GET_COMPLAINT_REQUEST]: getComplaintRequest,
  [Types.GET_COMPLAINT_SUCCESS]: getComplaintSuccess,
  [Types.GET_COMPLAINT_FAILURE]: getComplaintFailure,
  [Types.CREATE_COMPLAINT_REQUEST]: createComplaintRequest,
  [Types.CREATE_COMPLAINT_SUCCESS]: createComplaintSuccess,
  [Types.CREATE_COMPLAINT_FAILURE]: createComplaintFailure,
  [Types.UPDATE_COMPLAINT_REQUEST]: updateComplaintRequest,
  [Types.UPDATE_COMPLAINT_SUCCESS]: updateComplaintSuccess,
  [Types.UPDATE_COMPLAINT_FAILURE]: updateComplaintFailure,
  [Types.DELETE_COMPLAINT_REQUEST]: deleteComplaintRequest,
  [Types.DELETE_COMPLAINT_SUCCESS]: deleteComplaintSuccess,
  [Types.DELETE_COMPLAINT_FAILURE]: deleteComplaintFailure,
})
