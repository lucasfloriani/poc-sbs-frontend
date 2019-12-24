import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Icon from '@atoms/Icon'

const IconLink = ({ name, to, ...props }) => (
  <Link to={to} style={{ display: 'inline-flex' }}>
    <Icon name={name} {...props} />
  </Link>
)

IconLink.propTypes = {
  name: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
}

export default IconLink
