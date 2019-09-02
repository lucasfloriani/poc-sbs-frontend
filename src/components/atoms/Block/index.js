import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import { getOptionsFrom, getSize } from '@theme'

const Block = styled(({ backgroundColor, color, ...props }) => <div {...props} />)`
  background-color: ${({ backgroundColor: { type, position } }) => palette(type, position)};
  color: ${({ color }) => palette(color.type, color.position)};
  font-family: ${font('primary')};
  padding: ${getSize('small')};
`

Block.propTypes = {
  backgroundColor: PropTypes.shape({
    position: PropTypes.number,
    type: PropTypes.oneOf(getOptionsFrom('palette')),
  }),
  color: PropTypes.shape({
    position: PropTypes.number,
    type: PropTypes.oneOf(getOptionsFrom('palette')),
  }),
}

Block.defaultProps = {
  backgroundColor: { type: 'primary', position: 1 },
  color: { type: 'grayscale', position: 4 },
}

export default Block
