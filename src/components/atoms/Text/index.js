import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { font, palette } from 'styled-theme'
import InputMask from 'react-input-mask'
import withFormWrapper from '@hocs/inputWrapper'
import maskTypes from '@enums/maskTypes'

import {
  getSize,
  getOptionsFrom,
  getCubicBezier,
  getShadow,
} from '@theme'

const focusBorderColor = ({ focusBorderColor: { position, type } }) => palette(type, position)

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
  color: ${({ color: { position, type } }) => palette(type, position)};
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
    position: PropTypes.number,
    type: PropTypes.oneOf(getOptionsFrom('palette')),
  }),
  borderColor: PropTypes.shape({
    position: PropTypes.number,
    type: PropTypes.oneOf(getOptionsFrom('palette')),
  }),
  color: PropTypes.shape({
    position: PropTypes.number,
    type: PropTypes.oneOf(getOptionsFrom('palette')),
  }),
  focusBorderColor: PropTypes.shape({
    position: PropTypes.number,
    type: PropTypes.oneOf(getOptionsFrom('palette')),
  }),
  fontSize: PropTypes.string,
  invalid: PropTypes.bool,
  maskType: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
}

Input.defaultProps = {
  backgroundColor: { position: 4, type: 'grayscale' },
  borderColor: { position: 1, type: 'grayscale' },
  color: { position: 1, type: 'grayscale' },
  focusBorderColor: { position: 0, type: 'primary' },
  fontSize: 'extraSmall',
  type: 'text',
}

export default withFormWrapper(Input)
