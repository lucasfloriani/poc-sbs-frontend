import React from 'react'
import PropTypes from 'prop-types'
import QueryTypes from '@enums/queryTypes'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Creators as RatingActions } from '@store/ducks/rating'
import { ComplaintForm } from 'components'

const UpdateComplaintForm = ({
  deleteRatingRequest,
  initialValues,
  updateRatingRequest,
  toggleModal,
}) => (
  <ComplaintForm
    initialValues={initialValues}
    onDelete={values => deleteRatingRequest(values)}
    onSubmit={values => updateRatingRequest(values)}
    queryType={QueryTypes.Update}
    toggleModal={toggleModal}
  />
)

UpdateComplaintForm.propTypes = {
  deleteRatingRequest: PropTypes.func.isRequired,
  initialValues: PropTypes.shape({
    id: PropTypes.string.isRequired,
    rating: PropTypes.number,
  }).isRequired,
  updateRatingRequest: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch => bindActionCreators(RatingActions, dispatch)

export default connect(null, mapDispatchToProps)(UpdateComplaintForm)
