import styled, { keyframes } from 'styled-components'
import { font, palette } from 'styled-theme'
import { getCubicBezier, getSize, getShadow } from '@theme'

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

export const CheckboxWrapper = styled.div`
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
    background-color: ${({ disabledColor, backgroundColor: bgColor, disabled }) => {
    return disabled ? palette(disabledColor.type, disabledColor.position) : palette(bgColor.type, bgColor.position)
  }};
    border-radius: 50%;
    border: 1px solid ${({ disabled, disabledColor }) => {
    return disabled ? palette(disabledColor.type, disabledColor.position) : 'transparent'
  }};
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
    color: ${({ disabled, disabledColor }) => {
    return disabled ? palette(disabledColor.type, disabledColor.position) : palette('grayscale', 1)
  }};
    font-family: ${font('primary')};
    font-size: ${getSize('extraSmall')};
    line-height: 0.7;
    margin-left: 0.4em;
  }

  input {
    display: none;
  }

  input:checked + label > i {
    background-color: ${({ checkedBackgroundColor }) => {
    return palette(checkedBackgroundColor.type, checkedBackgroundColor.position)
  }};
  }

  input:checked + label > i:after {
    animation: ${check} 0.8s;
    background-color: ${({ bubbleColor }) => palette(bubbleColor.type, bubbleColor.position)};
    border-radius: 50%;
    content: '';
    height: .6em;
    width: .6em;
  }
`
