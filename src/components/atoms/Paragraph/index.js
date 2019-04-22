import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { font, palette } from 'styled-theme'
import { getFontWeight, getSize, getOptionsFrom } from '@theme'

const Paragraph = styled(({
  align, color, fontSize, hoverColor, ...props
}) => <p {...props} />)`
  font-family: ${font('primary')};
  color: ${({ color }) => palette(color.type, color.position)};
  font-size: ${({ fontSize }) => getSize(fontSize)};
  font-weight: ${getFontWeight('light')};
  margin: 0;
  ${({ align }) => css`text-align: ${align};`}
  width: 100%;
`

Paragraph.propTypes = {
  align: PropTypes.string,
  color: PropTypes.shape({
    type: PropTypes.oneOf(getOptionsFrom('palette')),
    position: PropTypes.number,
  }),
  fontSize: PropTypes.oneOf(getOptionsFrom('sizes')),
}

Paragraph.defaultProps = {
  color: { type: 'primary', position: 1 },
  fontSize: 'extraSmall',
}

export default Paragraph
