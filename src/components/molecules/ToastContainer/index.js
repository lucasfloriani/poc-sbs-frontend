import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Toast } from 'components'
import { connect } from 'react-redux'

const Wrapper = styled.div`
  bottom: 0;
  right: 10px;
  position: fixed;
  z-index: 1000;
`

const ToastContainer = ({ alerts }) => (
  <Wrapper>
    {alerts.map(({ id, message, type }) => <Toast key={id} id={id} type={type}>{message}</Toast>)}
  </Wrapper>
)

ToastContainer.propTypes = {
  alerts: PropTypes.array.isRequired,
}

const mapStateToProps = ({ alert: { alerts } }) => ({ alerts })

export default connect(mapStateToProps)(ToastContainer)
