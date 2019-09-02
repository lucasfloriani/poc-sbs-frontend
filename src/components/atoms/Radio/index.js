import React from 'react'
import PropTypes from 'prop-types'
import { getOptionsFrom } from '@theme'
import { CheckboxWrapper } from './style'

const Checkbox = ({ name, children, ...props }) => {
  const { disabled } = props
  return (
    <CheckboxWrapper {...props}>
      <input type="checkbox" id={name} name={name} disabled={disabled} />
      <label htmlFor={name}>
        <i />
        <span>{children}</span>
      </label>
    </CheckboxWrapper>
  )
}

Checkbox.propTypes = {
  backgroundColor: PropTypes.shape({
    position: PropTypes.number,
    type: PropTypes.oneOf(getOptionsFrom('palette')),
  }),
  bubbleColor: PropTypes.shape({
    position: PropTypes.number,
    type: PropTypes.oneOf(getOptionsFrom('palette')),
  }),
  checkedBackgroundColor: PropTypes.shape({
    position: PropTypes.number,
    type: PropTypes.oneOf(getOptionsFrom('palette')),
  }),
  disabled: PropTypes.bool,
  disabledColor: PropTypes.shape({
    position: PropTypes.number,
    type: PropTypes.oneOf(getOptionsFrom('palette')),
  }),
  invalid: PropTypes.bool,
  name: PropTypes.string,
  size: PropTypes.string,
}

Checkbox.defaultProps = {
  backgroundColor: { position: 4, type: 'grayscale' },
  bubbleColor: { position: 4, type: 'grayscale' },
  checkedBackgroundColor: { position: 0, type: 'primary' },
  disabledColor: { position: 3, type: 'grayscale' },
  size: 'medium',
}

export default Checkbox
