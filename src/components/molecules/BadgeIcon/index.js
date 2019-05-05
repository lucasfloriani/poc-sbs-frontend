import React from 'react'
import PropTypes from 'prop-types'
import { Badge, Icon } from 'components'

const BadgeIcon = ({ icon, ...props }) => (
  <Badge {...props}>
    <Icon icon={icon} color={{ type: 'primary', position: 0 }} />
  </Badge>
)

BadgeIcon.propTypes = {
  icon: PropTypes.string.isRequired,
}

export default BadgeIcon
