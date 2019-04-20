import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import { getFontWeight, getSize, getOptionsFrom } from '@theme'

const Paragraph = styled(({
  color, fontSize, hoverColor, ...props
}) => <p {...props} />)`
  font-family: ${font('primary')};
  color: ${({ color }) => palette(color.type, color.position)};
  font-size: ${({ fontSize }) => getSize(fontSize)};
  font-weight: ${getFontWeight('light')};
  margin: 0;
`

Paragraph.propTypes = {
  color: PropTypes.shape({
    type: PropTypes.oneOf(getOptionsFrom('palette')),
    position: PropTypes.number,
  }),
  fontSize: PropTypes.oneOf(getOptionsFrom('sizes')),
}

Paragraph.defaultProps = {
  color: { type: 'grayscale', position: 4 },
  fontSize: 'small',
}

export default Paragraph
