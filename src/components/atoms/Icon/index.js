import React from 'react'
import PropTypes from 'prop-types'
import { getOptionsFrom } from '@theme'
import { Wrapper } from './style'

const Icon = ({ icon, ...props }) => {
  const svg = require(`!raw-loader!./icons/${icon}.svg`)
  return <Wrapper {...props} dangerouslySetInnerHTML={{ __html: svg }} />
}

Icon.propTypes = {
  color: PropTypes.shape({
    position: PropTypes.number,
    type: PropTypes.oneOf(getOptionsFrom('palette')),
  }),
  hoverColor: PropTypes.shape({
    position: PropTypes.number,
    type: PropTypes.oneOf(getOptionsFrom('palette')),
  }),
  icon: PropTypes.string.isRequired,
  size: PropTypes.oneOf(getOptionsFrom('sizes')),
}

Icon.defaultProps = {
  color: { position: 0, type: 'grayscale' },
  hoverColor: { position: 1, type: 'grayscale' },
  size: 'medium',
}

export default Icon
