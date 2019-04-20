import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'
import { font, palette } from 'styled-theme'
import {
  getCubicBezier,
  getSize,
  getOptionsFrom,
  getShadow,
} from '@theme'

const sizes = {
  small: '20px',
  medium: '25px',
  large: '30px',
}

const check = keyframes`
  0% {
    transform: scale(0)
  }

  25% {
    transform: scale(1.2)
  }

  50% {
    transform: scale(1)
  }
`

const CheckboxWrapper = styled.div`
  display: flex;
  font-size: ${({ size }) => sizes[size]};

  label {
    align-items: center;
    cursor: pointer;
    display: flex;
    justify-content: center;
    user-select: none;
  }

  label > i {
    align-items: center;
    background-color: ${({ disabledColor, backgroundColor: bgColor, disabled }) => disabled ? palette(disabledColor.type, disabledColor.position) : palette(bgColor.type, bgColor.position)};
    border-radius: 50%;
    border: 1px solid ${({ disabled, disabledColor }) => disabled ? palette(disabledColor.type, disabledColor.position) : 'transparent'};
    box-shadow: ${getShadow('extraSmall')};
    display: inline-flex;
    height: ${getSize('normal')};
    justify-content: center;
    position: relative;
    transition: .3s background-color ${getCubicBezier()}, .3s box-shadow ${getCubicBezier()};
    width: ${getSize('normal')};
  }

  label:hover > i,
  label:focus > i {
    box-shadow: ${getShadow('small')};
  }

  label > span {
    color: ${({ disabled, disabledColor }) => disabled ? palette(disabledColor.type, disabledColor.position) : palette('grayscale', 1)};
    font-family: ${font('primary')};
    font-size: ${getSize('extraSmall')};
    line-height: 0.7;
    margin-left: 0.4em;
  }

  input {
    display: none;
  }

  input:checked + label > i {
    background-color: ${({ checkedBackgroundColor }) => palette(checkedBackgroundColor.type, checkedBackgroundColor.position)};
  }

  input:checked + label > i:after {
    animation: ${check} 0.8s;
    border-radius: 50%;
    background-color: ${({ bubbleColor }) => palette(bubbleColor.type, bubbleColor.position)};
    content: '';
    height: .6em;
    width: .6em;
  }
`

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
    type: PropTypes.oneOf(getOptionsFrom('palette')),
    position: PropTypes.number,
  }),
  bubbleColor: PropTypes.shape({
    type: PropTypes.oneOf(getOptionsFrom('palette')),
    position: PropTypes.number,
  }),
  checkedBackgroundColor: PropTypes.shape({
    type: PropTypes.oneOf(getOptionsFrom('palette')),
    position: PropTypes.number,
  }),
  disabled: PropTypes.bool,
  disabledColor: PropTypes.shape({
    type: PropTypes.oneOf(getOptionsFrom('palette')),
    position: PropTypes.number,
  }),
  invalid: PropTypes.bool,
  name: PropTypes.string,
  size: PropTypes.string,
}

Checkbox.defaultProps = {
  backgroundColor: { type: 'grayscale', position: 4 },
  bubbleColor: { type: 'grayscale', position: 4 },
  checkedBackgroundColor: { type: 'primary', position: 0 },
  disabledColor: { type: 'grayscale', position: 3 },
  size: 'medium',
}

export default Checkbox
