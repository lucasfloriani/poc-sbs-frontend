import React from 'react'
import PropTypes from 'prop-types'
import { getOptionsFrom } from '@theme'
import { Paragraph } from 'components'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Creators as AlertActions } from '@store/ducks/alert'
import { StyledToast } from './style'

const Toast = ({
  color, children, id, removeAlert, type, ...props
}) => {
  const remove = () => removeAlert(id)
  setTimeout(remove, 5000)

  return (
    <StyledToast type={type} onClick={remove} {...props}>
      <Paragraph color={color}>{children}</Paragraph>
    </StyledToast>
  )
}

Toast.propTypes = {
  children: PropTypes.string.isRequired,
  color: PropTypes.shape({
    position: PropTypes.number.isRequired,
    type: PropTypes.oneOf(getOptionsFrom('palette')).isRequired,
  }).isRequired,
  id: PropTypes.string.isRequired,
  removeAlert: PropTypes.any.isRequired,
  type: PropTypes.oneOf(['success', 'error']),
}

Toast.defaultProps = {
  color: { position: 4, type: 'grayscale' },
}

const mapDispatchToProps = dispatch => bindActionCreators(AlertActions, dispatch)

export default connect(null, mapDispatchToProps)(Toast)
