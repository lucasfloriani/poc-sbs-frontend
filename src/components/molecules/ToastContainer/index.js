import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Wrapper } from './style'
import Toast from '@atoms/Toast'

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
