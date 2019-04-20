import React from 'react'
import PropTypes from 'prop-types'
import styled, { css, keyframes } from 'styled-components'
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
    height: 0;
    width: 0;
  }

  25% {
    height: 0;
    width: 0.3em;
  }

  50% {
    height: 0.6em;
    width: 0.3em;
  }
`

const CheckboxWrapper = styled.div`
  display: flex;
  font-size: ${({ size }) => sizes[size]};
  ${({ justify }) => justify && css`justify-content: ${justify}`}

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
    border-radius: 5px;
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
    border-right: .2em solid ${palette('grayscale', 4)};
    border-top: .2em solid ${palette('grayscale', 4)};
    content: '';
    height: 0.6em;
    left: 50%;
    top: 50%;
    transform: translate(-50%, 50%) scaleX(-1) rotate(135deg);
    transform-origin: left top;
    width: 0.3em;
  }
`

const Checkbox = ({
  checked,
  id,
  name,
  children,
  onChange,
  value,
  ...props
}) => {
  const { disabled } = props
  return (
    <CheckboxWrapper {...props}>
      <input
        type="checkbox"
        id={id}
        name={name}
        value={value}
        disabled={disabled}
        onChange={onChange}
        checked={checked}
      />
      <label htmlFor={id}>
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
  justify: PropTypes.string,
  name: PropTypes.string,
  size: PropTypes.oneOf(Object.keys(sizes)),
}

Checkbox.defaultProps = {
  backgroundColor: { type: 'grayscale', position: 4 },
  checkedBackgroundColor: { type: 'primary', position: 0 },
  disabledColor: { type: 'grayscale', position: 3 },
  size: 'medium',
}

export default Checkbox
