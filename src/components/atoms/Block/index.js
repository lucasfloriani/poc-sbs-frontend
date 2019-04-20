import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import { getOptionsFrom, getSize } from '@theme'

const Block = styled(({ backgroundColor, color, ...props }) => <div {...props} />)`
  background-color: ${({ backgroundColor }) => palette(backgroundColor.type, backgroundColor.position)};
  color: ${({ color }) => palette(color.type, color.position)};
  font-family: ${font('primary')};
  padding: ${getSize('small')};
`

Block.propTypes = {
  backgroundColor: PropTypes.shape({
    type: PropTypes.oneOf(getOptionsFrom('palette')),
    position: PropTypes.number,
  }),
  color: PropTypes.shape({
    type: PropTypes.oneOf(getOptionsFrom('palette')),
    position: PropTypes.number,
  }),
}

Block.defaultProps = {
  backgroundColor: { type: 'secondary', position: 0 },
  color: { type: 'grayscale', position: 4 },
}

export default Block
