import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Link from 'react-router-dom/Link'
import { palette } from 'styled-theme'
import { getOptionsFrom, getCubicBezier } from '@theme'

const StyledLink = styled(({ color, ...props }) => <Link {...props} />)`
  align-items: center;
  color: ${({ color: { position, type } }) => palette(type, position)};
  display: inline-flex;
  font-weight: 500;
  text-decoration: none;
  transition: .3s color ${getCubicBezier()};

  :hover {
    text-decoration: underline;
  }
`

StyledLink.propTypes = {
  color: PropTypes.shape({
    position: PropTypes.number,
    type: PropTypes.oneOf(getOptionsFrom('palette')),
  }),
}

StyledLink.defaultProps = {
  color: { position: 2, type: 'primary' },
}

export default StyledLink
