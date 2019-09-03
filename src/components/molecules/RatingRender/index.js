import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { CreateRatingForm, Modal, UpdateRatingForm } from 'components'

const RatingRender = ({
  children, gasStationID, ratings, userID,
}) => {
  const [open, setOpen] = useState(false)
  const toggleModal = () => setOpen(!open)
  const userRating = ratings.find(rating => rating.user_id.toString() === userID)

  return (
    <>
      {children(!!userRating, toggleModal)}
      <Modal open={open} close={toggleModal}>
        {userRating ? (
          <UpdateRatingForm
            initialValues={{
              id: userRating ? `${userRating.id}` : '',
              rating: userRating ? userRating.rating : 0,
            }}
            toggleModal={toggleModal}
          />
        ) : (
          <CreateRatingForm
            initialValues={{ gas_station_id: gasStationID, rating: 0 }}
            toggleModal={toggleModal}
          />
        )}
      </Modal>
    </>
  )
}

RatingRender.propTypes = {
  children: PropTypes.func.isRequired,
  gasStationID: PropTypes.string.isRequired,
  ratings: PropTypes.array.isRequired,
  userID: PropTypes.string.isRequired,
}

const mapStateToProps = ({ auth: { user: { id } } }) => ({ userID: `${id}` })

export default connect(mapStateToProps)(RatingRender)
