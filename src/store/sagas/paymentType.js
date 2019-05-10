import { put, call } from 'redux-saga/effects'
import { Creators as AlertActions } from '../ducks/alert'
import { Creators as PaymentTypeActions } from '../ducks/paymentType'
import api from '../../services'

export function* paymentTypesRequest() {
  try {
    const response = yield call(api.get, 'payment-types')
    const paymentTypes = response.data.map(({ id, name }) => [name, id])
    yield put(PaymentTypeActions.paymentTypesSuccess(paymentTypes))
  } catch (err) {
    console.log('SAGA PAYMENT TYPE ERR: ', err)
    yield put(PaymentTypeActions.paymentTypesFailure())
    yield put(AlertActions.createErrorAlert('Erro ao carregar os tipos de pagamento'))
  }
}
