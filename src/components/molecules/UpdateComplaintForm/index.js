import React from 'react'
import PropTypes from 'prop-types'
import QueryTypes from '@enums/queryTypes'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Creators as ComplaintActions } from '@store/ducks/complaint'
import { ComplaintForm } from 'components'

const UpdateComplaintForm = ({
  initialValues,
  deleteComplaintRequest,
  updateComplaintRequest,
  toggleModal,
}) => (
  <ComplaintForm
    initialValues={initialValues}
    onDelete={values => deleteComplaintRequest(values)}
    onSubmit={values => updateComplaintRequest(values)}
    queryType={QueryTypes.Update}
    toggleModal={toggleModal}
  />
)

UpdateComplaintForm.propTypes = {
  deleteComplaintRequest: PropTypes.func.isRequired,
  initialValues: PropTypes.shape({
    id: PropTypes.string.isRequired,
    message: PropTypes.string,
  }).isRequired,
  updateComplaintRequest: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch => bindActionCreators(ComplaintActions, dispatch)

export default connect(null, mapDispatchToProps)(UpdateComplaintForm)
