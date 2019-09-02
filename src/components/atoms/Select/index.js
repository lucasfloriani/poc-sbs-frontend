import React from 'react'
import PropTypes from 'prop-types'
import withFormWrapper from '@containers/inputWrapper'
import { getOptionsFrom } from '@theme'
import { StyledSelect } from './style'

const Select = ({ options, ...props }) => (
  <StyledSelect {...props}>
    <option value="" />
    {options.map(([name, value]) => <option value={value} key={value}>{name}</option>)}
  </StyledSelect>
)

Select.propTypes = {
  active: PropTypes.bool,
  borderColor: PropTypes.shape({
    position: PropTypes.number,
    type: PropTypes.oneOf(getOptionsFrom('palette')),
  }),
  disabled: PropTypes.bool,
  focusBorderColor: PropTypes.shape({
    position: PropTypes.number,
    type: PropTypes.oneOf(getOptionsFrom('palette')),
  }),
  fontSize: PropTypes.oneOf(getOptionsFrom('sizes')),
  options: PropTypes.array,
  shadow: PropTypes.oneOf(getOptionsFrom('shadows')),
}

Select.defaultProps = {
  borderColor: { position: 1, type: 'grayscale' },
  fontSize: 'extraSmall',
  focusBorderColor: { position: 0, type: 'primary' },
  shadow: 'extraSmall',
}

export default withFormWrapper(Select)
