import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Link from 'react-router-dom/Link'
import { palette } from 'styled-theme'
import { getOptionsFrom, getCubicBezier } from '@theme'

const StyledLink = styled(({ color, ...props }) => <Link {...props} />)`
  align-items: center;
  color: ${({ color }) => palette(color.type, color.position)};
  display: inline-flex;
  font-weight: 500;
  text-decoration: none;
  transition: .3s color ${getCubicBezier()};
`

StyledLink.propTypes = {
  color: PropTypes.shape({
    type: PropTypes.oneOf(getOptionsFrom('palette')),
    position: PropTypes.number,
  }),
}

StyledLink.defaultProps = {
  color: { type: 'secondary', position: 1 },
}

export default StyledLink
