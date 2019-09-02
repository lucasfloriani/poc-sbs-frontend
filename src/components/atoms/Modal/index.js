import React from 'react'
import PropTypes from 'prop-types'
import { Background, Content, Wrapper } from './style'

const Modal = ({ close, open, ...props }) => (
  <Wrapper open={open}>
    <Background onClick={close} />
    <Content {...props} />
  </Wrapper>
)

Modal.propTypes = {
  close: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
}

export default Modal
