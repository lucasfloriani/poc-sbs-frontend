import React from 'react'
import PropTypes from 'prop-types'
import QueryTypes from '@enums/queryTypes'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Creators as RatingActions } from '@store/ducks/rating'
import { RatingForm } from 'components'

const CreateRatingForm = ({
  initialValues, createRatingRequest, toggleModal,
}) => (
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
