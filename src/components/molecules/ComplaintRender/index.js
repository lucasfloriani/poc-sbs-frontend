import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Modal from '@atoms/Modal'
import CreateComplaintForm from '@molecules/CreateComplaintForm'

const ComplaintRender = ({ children, gasStationID }) => {
  const [open, setOpen] = useState(false)
  const toggleModal = () => setOpen(!open)

  return (
    <>
      {children(toggleModal)}
      <Modal open={open} close={toggleModal}>
        <CreateComplaintForm
          initialValues={{ gas_station_id: gasStationID, image: '', message: '' }}
          toggleModal={toggleModal}
        />
      </Modal>
    </>
  )
}

ComplaintRender.propTypes = {
  children: PropTypes.func.isRequired,
  gasStationID: PropTypes.string.isRequired,
}

export default ComplaintRender
