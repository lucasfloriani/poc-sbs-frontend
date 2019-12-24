import React from 'react'
import PropTypes from 'prop-types'
import Badge from '@atoms/Badge'
import Icon from '@atoms/Icon'

const BadgeIcon = ({ name, ...props }) => (
  <Badge {...props}>
    <Icon name={name} color={{ type: 'primary', position: 0 }} />
  </Badge>
)

BadgeIcon.propTypes = {
  name: PropTypes.string.isRequired,
}

export default BadgeIcon
