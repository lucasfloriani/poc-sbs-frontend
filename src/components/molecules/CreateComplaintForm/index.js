import React from 'react'
import PropTypes from 'prop-types'
import QueryTypes from '@enums/queryTypes'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Creators as ComplaintActions } from '@store/ducks/complaint'
import { ComplaintForm } from 'components'

const CreateComplaintForm = ({
  initialValues, createComplaintRequest, toggleModal,
}) => (
  <ComplaintForm
    initialValues={initialValues}
    onSubmit={values => createComplaintRequest(values)}
    queryType={QueryTypes.Create}
    toggleModal={toggleModal}
  />
)

CreateComplaintForm.propTypes = {
  createComplaintRequest: PropTypes.func.isRequired,
  initialValues: PropTypes.shape({
    gas_station_id: PropTypes.string,
    message: PropTypes.string,
  }).isRequired,
  toggleModal: PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch => bindActionCreators(ComplaintActions, dispatch)

export default connect(null, mapDispatchToProps)(CreateComplaintForm)
