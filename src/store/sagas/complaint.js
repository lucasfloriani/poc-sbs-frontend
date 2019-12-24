/* eslint-disable no-console */
import { put, call } from 'redux-saga/effects'
import FileSaver from 'file-saver'
import { Creators as AlertActions } from '../ducks/alert'
import { Creators as ComplaintActions } from '../ducks/complaint'
import { Creators as GasStationAction } from '../ducks/gasStation'
import api from '@service'
import { getRequestErrorsFromErrorObj } from '@helpers/error'

export function* complaintsRequest() {
  try {
    const response = yield call(api.get, 'admin/complaints')
    const complaints = response.data
    yield put(ComplaintActions.complaintsSuccess(complaints))
  } catch (err) {
    console.log('SAGA COMPLAINT ERR: ', err)
    yield put(ComplaintActions.complaintsFailure())
    yield put(AlertActions.createErrorAlert('Erro ao carregar as denúncias, tente novamente mais tarde'))
  }
}

export function* createComplaintRequest({ complaintData }) {
  try {
    const response = yield call(api.post, 'users/complaints', complaintData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
    const complaint = response.data
    yield put(ComplaintActions.createComplaintSuccess(complaint))
    yield put(GasStationAction.createGasStationsComplaint(complaint))
    yield put(AlertActions.createSuccessAlert('Denúncia realizada com successo'))
  } catch (err) {
    console.log('SAGA COMPLAINT ERR:', err)
    yield put(ComplaintActions.createComplaintFailure())
    yield put(AlertActions.createMultiErrorAlert(getRequestErrorsFromErrorObj(err)))
  }
}

export function* complaintRelatoryRequest() {
  try {
    const requestOptions = { headers: { Accept: 'application/xls', 'Content-Type': 'application/xls' } }
    const response = yield call(api.get, 'admin/complaints/relatory', requestOptions)
    const blob = new Blob([response.data], { type: 'application/xls' })
    FileSaver.saveAs(blob, 'relatorio-de-denuncias.xls')
    yield put(ComplaintActions.complaintRelatorySuccess())
  } catch (err) {
    console.log('SAGA COMPLAINT ERR: ', err)
    yield put(ComplaintActions.complaintRelatoryFailure())
    yield put(AlertActions.createErrorAlert('Erro ao baixar o relatório de denúncias, tente novamente mais tarde'))
  }
}
