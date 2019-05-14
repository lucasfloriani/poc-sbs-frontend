import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { CreateComplaintForm, Modal, UpdateComplaintForm } from 'components'

const ComplaintRender = ({
  children, complaints, gasStationID, userID,
}) => {
  const [open, setOpen] = useState(false)
  const toggleModal = () => setOpen(!open)
  const userComplaint = complaints.find(complaint => complaint.user_id.toString() === userID)

  return (
    <>
      {children(!!userComplaint, toggleModal)}
      <Modal open={open} close={toggleModal}>
        {userComplaint ? (
          <UpdateComplaintForm
            initialValues={{
              id: userComplaint ? `${userComplaint.id}` : '',
              message: userComplaint ? `${userComplaint.message}` : '',
            }}
            toggleModal={toggleModal}
          />
        ) : (
          <CreateComplaintForm
            initialValues={{ gas_station_id: gasStationID, message: '' }}
            toggleModal={toggleModal}
          />
        )}
      </Modal>
    </>
  )
}

ComplaintRender.propTypes = {
  children: PropTypes.func.isRequired,
  complaints: PropTypes.array.isRequired,
  gasStationID: PropTypes.string.isRequired,
  userID: PropTypes.string.isRequired,
}

const mapStateToProps = ({ auth: { user: { id } } }) => ({ userID: `${id}` })

export default connect(mapStateToProps)(ComplaintRender)
