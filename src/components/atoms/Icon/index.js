import React from 'react'
import PropTypes from 'prop-types'
import { Wrapper } from './style'
import { ReactComponent as AlertIcon } from './icons/alert.svg'
import { ReactComponent as BookmarkIcon } from './icons/bookmark.svg'
import { ReactComponent as ClearIcon } from './icons/clear.svg'
import { ReactComponent as DeleteIcon } from './icons/delete.svg'
import { ReactComponent as DownArrowIcon } from './icons/downArrow.svg'
import { ReactComponent as EditIcon } from './icons/edit.svg'
import { ReactComponent as FacebookIcon } from './icons/facebook.svg'
import { ReactComponent as FilterIcon } from './icons/filter.svg'
import { ReactComponent as LeftArrowIcon } from './icons/leftArrow.svg'
import { ReactComponent as LogoutIcon } from './icons/logout.svg'
import { ReactComponent as MapPinIcon } from './icons/mapPin.svg'
import { ReactComponent as MenuIcon } from './icons/menu.svg'
import { ReactComponent as NavigationIcon } from './icons/navigation.svg'
import { ReactComponent as RightArrowIcon } from './icons/rightArrow.svg'
import { ReactComponent as StarIcon } from './icons/star.svg'
import { ReactComponent as UserIcon } from './icons/user.svg'
import { getOptionsFrom } from '@theme'

const getIcon = (name) => {
  switch (name) {
    case 'Alert': {
      return <AlertIcon />
    }
    case 'Bookmark': {
      return <BookmarkIcon />
    }
    case 'Clear': {
      return <ClearIcon />
    }
    case 'Delete': {
      return <DeleteIcon />
    }
    case 'DownArrow': {
      return <DownArrowIcon />
    }
    case 'Edit': {
      return <EditIcon />
    }
    case 'Facebook': {
      return <FacebookIcon />
    }
    case 'Filter': {
      return <FilterIcon />
    }
    case 'LeftArrow': {
      return <LeftArrowIcon />
    }
    case 'Logout': {
      return <LogoutIcon />
    }
    case 'MapPin': {
      return <MapPinIcon />
    }
    case 'Menu': {
      return <MenuIcon />
    }
    case 'Navigation': {
      return <NavigationIcon />
    }
    case 'RightArrow': {
      return <RightArrowIcon />
    }
    case 'Star': {
      return <StarIcon />
    }
    case 'User': {
      return <UserIcon />
    }
    default: {
      return ''
    }
  }
}

const Icon = ({ name, ...props }) => <Wrapper {...props}>{getIcon(name)}</Wrapper>

Icon.propTypes = {
  color: PropTypes.shape({
    position: PropTypes.number,
    type: PropTypes.oneOf(getOptionsFrom('palette')),
  }),
  hoverColor: PropTypes.shape({
    position: PropTypes.number,
    type: PropTypes.oneOf(getOptionsFrom('palette')),
  }),
  name: PropTypes.oneOf([
    'Alert',
    'Bookmark',
    'Clear',
    'Delete',
    'DownArrow',
    'Edit',
    'Facebook',
    'Filter',
    'LeftArrow',
    'Logout',
    'MapPin',
    'Menu',
    'Navigation',
    'RightArrow',
    'Star',
    'User',
  ]).isRequired,
  size: PropTypes.oneOf(getOptionsFrom('sizes')),
}

Icon.defaultProps = {
  color: { position: 0, type: 'grayscale' },
  hoverColor: { position: 1, type: 'grayscale' },
  size: 'medium',
}

export default Icon
