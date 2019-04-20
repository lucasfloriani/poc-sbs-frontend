import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { font, palette } from 'styled-theme'
import {
  getCubicBezier,
  getSize,
  getFontWeight,
  getOptionsFrom,
} from '@theme'

const styles = css`
  color: ${({ color }) => palette(color.type, color.position)};
  font-family: ${font('primary')};
  font-size: ${({ fontSize }) => getSize(fontSize)};
  font-weight: ${({ level }) => [1, 2].includes(level) ? getFontWeight('semiBold') : getFontWeight('medium')};
  margin: ${({ margin }) => margin};
  transition: color .3s ${getCubicBezier()};

  :hover {
    color: ${({ hoverColor }) => palette(hoverColor.type, hoverColor.position)}
  }
`

const Heading = styled(({
  children, color, fontSize, hoverColor, level, margin, ...props
}) => React.createElement(`h${level}`, props, children))`${styles}`

Heading.propTypes = {
  children: PropTypes.node,
  color: PropTypes.shape({
    type: PropTypes.oneOf(getOptionsFrom('palette')),
    position: PropTypes.number,
  }),
  fontSize: PropTypes.oneOf(getOptionsFrom('sizes')),
  hoverColor: PropTypes.shape({
    type: PropTypes.oneOf(getOptionsFrom('palette')),
    position: PropTypes.number,
  }),
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  margin: PropTypes.string,
}

Heading.defaultProps = {
  color: { type: 'grayscale', position: 4 },
  fontSize: 'extraLarge',
  hoverColor: { type: 'grayscale', position: 4 },
  level: 1,
  margin: '0',
}

export default Heading
