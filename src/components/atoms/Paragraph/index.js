import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { prop } from 'styled-tools'
import { font, palette } from 'styled-theme'
import { getFontWeight, getSize, getOptionsFrom } from '@theme'

const Paragraph = styled(({
  align, color, fontSize, hoverColor, ...props
}) => <p {...props} />)`
  ${({ align }) => css`text-align: ${align};`}
  color: ${({ color: { position, type } }) => palette(type, position)};
  font-family: ${font('primary')};
  font-size: ${({ fontSize }) => getSize(fontSize)};
  font-weight: ${getFontWeight('light')};
  margin: ${prop('margin')};
  width: 100%;
`

Paragraph.propTypes = {
  align: PropTypes.string,
  color: PropTypes.shape({
    position: PropTypes.number,
    type: PropTypes.oneOf(getOptionsFrom('palette')),
  }),
  fontSize: PropTypes.oneOf(getOptionsFrom('sizes')),
  margin: PropTypes.string.isRequired,
}

Paragraph.defaultProps = {
  color: { position: 1, type: 'primary' },
  fontSize: 'extraSmall',
  margin: '0',
}

export default Paragraph
