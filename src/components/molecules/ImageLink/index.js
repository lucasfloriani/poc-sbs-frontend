import React from 'react'
import PropTypes from 'prop-types'
import { Anchor } from './style'
import Image from '@atoms/Image'
import Link from '@atoms/Link'

const ImageLink = ({
  href, target, to, ...props
}) => to
  ? <Link to={to}><Image {...props} /></Link>
  : <Anchor href={href} target={target}><Image {...props} /></Anchor>

ImageLink.propTypes = {
  alt: PropTypes.string,
  href: PropTypes.string,
  to: PropTypes.string,
  target: PropTypes.string,
}

export default ImageLink
