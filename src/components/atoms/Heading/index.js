import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import {
  getCubicBezier,
  getSize,
  getFontWeight,
  getOptionsFrom,
} from '@theme'

const Heading = styled(({
  children, color, fontSize, hoverColor, level, margin, ...props
}) => React.createElement(`h${level}`, props, children))`
  color: ${({ color: { position, type } }) => palette(type, position)};
  font-family: ${font('primary')};
  font-size: ${({ fontSize }) => getSize(fontSize)};
  font-weight: ${getFontWeight('medium')};
  margin: ${({ margin }) => margin};
  transition: color .3s ${getCubicBezier()};

  :hover {
    color: ${({ hoverColor: { position, type } }) => palette(type, position)}
  }
`

Heading.propTypes = {
  children: PropTypes.node,
  color: PropTypes.shape({
    position: PropTypes.number,
    type: PropTypes.oneOf(getOptionsFrom('palette')),
  }),
  fontSize: PropTypes.oneOf(getOptionsFrom('sizes')),
  hoverColor: PropTypes.shape({
    position: PropTypes.number,
    type: PropTypes.oneOf(getOptionsFrom('palette')),
  }),
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  margin: PropTypes.string,
}

Heading.defaultProps = {
  color: { position: 0, type: 'grayscale' },
  fontSize: 'extraLarge',
  hoverColor: { position: 1, type: 'grayscale' },
  level: 1,
  margin: '0',
}

export default Heading
