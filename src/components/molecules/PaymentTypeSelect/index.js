import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Creators as PaymentTypeActions } from '@store/ducks/paymentType'
import { Select } from 'components'

const PaymentTypeSelect = ({ paymentTypes, paymentTypesRequest, ...props }) => {
  useEffect(() => { paymentTypesRequest() }, [])
  return (<Select options={paymentTypes} {...props} />)
}

PaymentTypeSelect.propTypes = {
  paymentTypes: PropTypes.array.isRequired,
}

const mapStateToProps = ({ paymentType: { paymentTypes, isFetching } }) => ({ paymentTypes, isFetching })
const mapDispatchToProps = dispatch => bindActionCreators(PaymentTypeActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(PaymentTypeSelect)
