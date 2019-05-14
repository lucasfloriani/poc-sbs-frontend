import { put, call } from 'redux-saga/effects'
import { Creators as AlertActions } from '../ducks/alert'
import { Creators as ComplaintActions } from '../ducks/complaint'
import { Creators as GasStationAction } from '../ducks/gasStation'
import api from '../../services'

export function* getComplaintRequest({ complaintID }) {
  try {
    const response = yield call(api.get, `users/complaints/${complaintID}`)
    yield put(ComplaintActions.getComplaintSuccess(response.data))
  } catch (err) {
    console.log('SAGA COMPLAINT ERR:', err)
    yield put(ComplaintActions.getComplaintFailure())
    yield put(AlertActions.createErrorAlert('Erro ao carregar a denúncia do posto'))
  }
}

export function* createComplaintRequest({ complaintData }) {
  try {
    const response = yield call(api.post, 'users/complaints', complaintData)
    const complaint = response.data
    yield put(ComplaintActions.createComplaintSuccess(complaint))
    yield put(GasStationAction.createGasStationsComplaint(complaint))
    yield put(AlertActions.createSuccessAlert('Denúncia realizada com successo'))
  } catch (err) {
    console.log('SAGA COMPLAINT ERR:', err)
    yield put(ComplaintActions.createComplaintFailure())
    yield put(AlertActions.createErrorAlert('Erro ao realizar a denúncia do posto, tente novamente mais tarde'))
  }
}

export function* updateComplaintRequest({ complaintData }) {
  try {
    const response = yield call(api.put, `users/complaints/${complaintData.id}`, complaintData)
    const complaint = response.data
    yield put(ComplaintActions.updateComplaintSuccess(complaint))
    yield put(GasStationAction.updateGasStationsComplaint(complaint))
    yield put(AlertActions.createSuccessAlert('Denúncia atualizada com successo'))
  } catch (err) {
    console.log('SAGA COMPLAINT ERR:', err)
    yield put(ComplaintActions.updateComplaintFailure())
    yield put(AlertActions.createErrorAlert('Erro ao atualizar a denúncia do posto, tente novamente mais tarde'))
  }
}

export function* deleteComplaintRequest({ complaintID }) {
  try {
    const response = yield call(api.delete, `users/complaints/${complaintID}`)
    yield put(ComplaintActions.deleteComplaintSuccess(complaintID))
    yield put(GasStationAction.deleteGasStationsComplaint(response.data))
    yield put(AlertActions.createSuccessAlert('Denúncia excluida com successo'))
  } catch (err) {
    console.log('SAGA COMPLAINT ERR:', err)
    yield put(ComplaintActions.deleteComplaintFailure())
    yield put(AlertActions.createErrorAlert('Erro ao excluir a denúncia do posto, tente novamente mais tarde'))
  }
}
