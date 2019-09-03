import React from 'react'
import PropTypes from 'prop-types'
import Link from 'react-router-dom/Link'
import { Wrapper } from './style'

const MenuItem = ({ children, icon, ...props }) => (
  <Wrapper>
    {icon && icon}
    <Link {...props}>{children}</Link>
  </Wrapper>
)

MenuItem.propTypes = {
  icon: PropTypes.node,
}

export default MenuItem
