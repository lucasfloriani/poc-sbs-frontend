import React from 'react'
import PropTypes from 'prop-types'
import Link from 'react-router-dom/Link'
import { Icon } from 'components'

const IconLink = ({ icon, to, ...props }) => (
  <Link to={to} style={{ display: 'inline-flex' }}>
    <Icon icon={icon} {...props} />
  </Link>
)

IconLink.propTypes = {
  icon: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
}

export default IconLink
