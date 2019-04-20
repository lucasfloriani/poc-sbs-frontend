import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { prop } from 'styled-tools'
import { font, palette } from 'styled-theme'
import { getOptionsFrom, getPadding } from '@theme'

const Caption = styled(({
  backgroundColor, color, fontSize, position, ...props
}) => <caption {...props} />)`
  background-color: ${({ backgroundColor }) => palette(backgroundColor.type, backgroundColor.position)};
  caption-side: ${prop('position')};
  color: ${({ color }) => palette(color.type, color.position)};
  font-family: ${font('primary')};
  padding: ${getPadding('secondary')};
`

Caption.propTypes = {
  backgroundColor: PropTypes.shape({
    type: PropTypes.oneOf(getOptionsFrom('palette')),
    position: PropTypes.number,
  }),
  color: PropTypes.shape({
    type: PropTypes.oneOf(getOptionsFrom('palette')),
    position: PropTypes.number,
  }),
  fontSize: PropTypes.oneOf(getOptionsFrom('sizes')),
  position: PropTypes.oneOf(['bottom', 'top', 'left', 'right']),
}

Caption.defaultProps = {
  backgroundColor: { type: 'primary', position: 0 },
  color: { type: 'grayscale', position: 4 },
  fontSize: 'extraLarge',
  position: 'top',
}

export default Caption
