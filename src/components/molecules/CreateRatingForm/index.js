import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import QueryTypes from '@enums/queryTypes'
import { Creators as RatingActions } from '@store/ducks/rating'
import RatingForm from '@molecules/RatingForm'

const CreateRatingForm = ({ createRatingRequest, initialValues, toggleModal }) => (
  <RatingForm
    initialValues={initialValues}
    onSubmit={values => createRatingRequest(values)}
    queryType={QueryTypes.Create}
    toggleModal={toggleModal}
  />
)

CreateRatingForm.propTypes = {
  createRatingRequest: PropTypes.func.isRequired,
  initialValues: PropTypes.shape({
    gas_station_id: PropTypes.string.isRequired,
    rating: PropTypes.number,
  }).isRequired,
  toggleModal: PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch => bindActionCreators(RatingActions, dispatch)

export default connect(null, mapDispatchToProps)(CreateRatingForm)
