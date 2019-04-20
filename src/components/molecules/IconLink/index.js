import React from 'react'
import PropTypes from 'prop-types'
import Link from 'react-router-dom/Link'
import { Icon } from 'components'

const IconLink = ({ to, icon, ...props }) => {
  return (
    <Link to={to} style={{ display: 'inline-flex' }}>
      <Icon icon={icon} {...props} />
    </Link>
  )
}

IconLink.propTypes = {
  to: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
}

export default IconLink
