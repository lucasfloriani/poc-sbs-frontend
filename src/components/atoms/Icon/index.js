import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { palette } from 'styled-theme'
import { getCubicBezier, getSize, getOptionsFrom } from '@theme'

const Wrapper = styled(({
  color, hoverColor, size, ...props
}) => <span {...props} />)`
  box-sizing: border-box;
  color: ${({ color }) => palette(color.type, color.position)};
  display: inline-block;
  font-size: ${({ size }) => getSize(size)};
  height: 1em;
  transition: .3s color ${getCubicBezier()};
  width: 1em;

  :hover {
    color: ${({ hoverColor }) => palette(hoverColor.type, hoverColor.position)}
  }

  & > svg {
    fill: currentcolor;
    height: 100%;
    stroke: currentcolor;
    width: 100%;
  }
`

const Icon = ({ icon, ...props }) => {
  const svg = require(`!raw-loader!./icons/${icon}.svg`)
  return <Wrapper {...props} dangerouslySetInnerHTML={{ __html: svg }} />
}

Icon.propTypes = {
  color: PropTypes.shape({
    type: PropTypes.oneOf(getOptionsFrom('palette')),
    position: PropTypes.number,
  }),
  hoverColor: PropTypes.shape({
    type: PropTypes.oneOf(getOptionsFrom('palette')),
    position: PropTypes.number,
  }),
  icon: PropTypes.string.isRequired,
  size: PropTypes.oneOf(getOptionsFrom('sizes')),
}

Icon.defaultProps = {
  color: { type: 'grayscale', position: 0 },
  hoverColor: { type: 'grayscale', position: 1 },
  size: 'medium',
}

export default Icon
