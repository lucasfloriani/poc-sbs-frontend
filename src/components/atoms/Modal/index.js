import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { getCubicBezier } from '@theme'

const Wrapper = styled(({ children, open, ...props }) => <div {...props}>{children}</div>)`
  height: 100vh;
  position: fixed;
  right: 0;
  opacity: ${({ open }) => open ? 1 : 0};
  top: 0;
  transition: .5s opacity ${getCubicBezier()}, .5s z-index ${getCubicBezier()};
  width: 100%;
  z-index: ${({ open }) => open ? 300 : -1};
`

const Background = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  height: 100vh;
  width: 100%;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  left: 50%;
  max-height: 90vh;
  overflow-y: auto;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  transition: .5s transform ${getCubicBezier()};
  max-width: 90vw;
`

const Modal = ({ close, open, ...props }) => {
  return (
    <Wrapper open={open}>
      <Background onClick={close} />
      <Content {...props} />
    </Wrapper>
  )
}

Modal.propTypes = {
  close: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
}

export default Modal
