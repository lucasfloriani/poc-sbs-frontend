import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { font, palette } from 'styled-theme'
import withFormWrapper from '@containers/inputWrapper'
import {
  getCubicBezier,
  getOptionsFrom,
  getSize,
  getShadow,
} from '@theme'

const StyledSelect = styled.select`
  border: 1px solid ${({ borderColor }) => palette(borderColor.type, borderColor.position)};
  border-radius: 3px;
  box-shadow: ${({ shadow }) => getShadow(shadow)};
  font-family: ${font('primary')};
  font-size: ${({ fontSize }) => getSize(fontSize)};
  outline: none;
  padding: 9px 12px;
  transition: .3s border-color ${getCubicBezier()};
  width: 100%;

  ${({ active }) => active && css`
    border-color: ${({ focusBorderColor }) => palette(focusBorderColor.type, focusBorderColor.position)};
  `}
`

const Select = ({ options, ...props }) => {
  return (
    <StyledSelect {...props}>
      <option value="" />
      {options.map(([name, value]) => (
        <option value={value} key={value}>{name}</option>
      ))}
    </StyledSelect>
  )
}

Select.propTypes = {
  active: PropTypes.bool,
  borderColor: PropTypes.shape({
    type: PropTypes.oneOf(getOptionsFrom('palette')),
    position: PropTypes.number,
  }),
  disabled: PropTypes.bool,
  focusBorderColor: PropTypes.shape({
    type: PropTypes.oneOf(getOptionsFrom('palette')),
    position: PropTypes.number,
  }),
  fontSize: PropTypes.oneOf(getOptionsFrom('sizes')),
  options: PropTypes.array,
  shadow: PropTypes.oneOf(getOptionsFrom('shadows')),
}

Select.defaultProps = {
  borderColor: { type: 'grayscale', position: 1 },
  fontSize: 'extraSmall',
  focusBorderColor: { type: 'primary', position: 0 },
  shadow: 'extraSmall',
}

export default withFormWrapper(Select)
