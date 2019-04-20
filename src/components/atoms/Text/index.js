import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { font, palette } from 'styled-theme'
import InputMask from 'react-input-mask'
import withFormWrapper from '@containers/inputWrapper'
import maskTypes from '@enums/maskTypes'
import {
  getSize,
  getOptionsFrom,
  getCubicBezier,
  getShadow,
} from '@theme'

const focusBorderColor = ({ focusBorderColor }) => palette(focusBorderColor.type, focusBorderColor.position)

const Input = styled(({
  active,
  backgroundColor,
  borderColor,
  color,
  focusBorderColor,
  fontSize,
  labelTitle,
  maskType,
  ...props
}) => <InputMask mask={maskTypes[maskType]} {...props} />)`
  background-color: ${({ backgroundColor }) => palette(backgroundColor.type, backgroundColor.position)};
  border: 1px solid ${({ borderColor }) => palette(borderColor.type, borderColor.position)};
  border-radius: 3px;
  box-shadow: ${getShadow('extraSmall')};
  box-sizing: border-box;
  color: ${({ color }) => palette(color.type, color.position)};
  display: block;
  font-family: ${font('primary')};
  font-size: ${({ fontSize }) => getSize(fontSize)};
  margin: 0;
  outline: none;
  padding: 10px 12px;
  transition: .3s border-color ${getCubicBezier()},
              .3s color ${getCubicBezier()},
              .3s background-color ${getCubicBezier()};
  width: 100%;

  ${({ active }) => active && css`
    border-color: ${focusBorderColor};
  `}

  ::selection {
    background-color: ${focusBorderColor};
    color: ${palette('grayscale', 4)};
  }
`

Input.propTypes = {
  active: PropTypes.bool,
  backgroundColor: PropTypes.shape({
    type: PropTypes.oneOf(getOptionsFrom('palette')),
    position: PropTypes.number,
  }),
  borderColor: PropTypes.shape({
    type: PropTypes.oneOf(getOptionsFrom('palette')),
    position: PropTypes.number,
  }),
  color: PropTypes.shape({
    type: PropTypes.oneOf(getOptionsFrom('palette')),
    position: PropTypes.number,
  }),
  focusBorderColor: PropTypes.shape({
    type: PropTypes.oneOf(getOptionsFrom('palette')),
    position: PropTypes.number,
  }),
  fontSize: PropTypes.string,
  invalid: PropTypes.bool,
  maskType: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
}

Input.defaultProps = {
  backgroundColor: { type: 'grayscale', position: 4 },
  borderColor: { type: 'grayscale', position: 1 },
  color: { type: 'grayscale', position: 1 },
  focusBorderColor: { type: 'primary', position: 0 },
  fontSize: 'extraSmall',
  type: 'text',
}

export default withFormWrapper(Input)
