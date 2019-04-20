import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { palette } from 'styled-theme/dist'
import { getShadow } from '@theme'
import { Paragraph } from 'components'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Creators as AlertActions } from '@store/ducks/alert'

const StyledToast = styled.div`
  background-color: ${({ type }) => type === 'success' ? palette('success', 0) : palette('error', 0)};
  border-radius: 3px;
  box-shadow: ${getShadow()};
  cursor: pointer;
  padding: .6em 1.2em;
  margin: 10px 0;
  text-align: center;
  width: 250px;
`

const Toast = ({
  children, id, removeAlert, type,
}) => {
  const remove = () => removeAlert(id)
  setTimeout(remove, 5000)

  return (
    <StyledToast type={type} onClick={remove}>
      <Paragraph>{children}</Paragraph>
    </StyledToast>
  )
}

Toast.propTypes = {
  children: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  removeAlert: PropTypes.any.isRequired,
  type: PropTypes.oneOf(['success', 'error']),
}

const mapDispatchToProps = dispatch => bindActionCreators(AlertActions, dispatch)

export default connect(null, mapDispatchToProps)(Toast)
