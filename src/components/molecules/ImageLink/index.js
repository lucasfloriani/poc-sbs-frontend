import React from 'react'
import PropTypes from 'prop-types'
import { Image, Link } from 'components'
import { Anchor } from './style'

const ImageLink = ({
  href, target, to, ...props
}) => to
  ? <Link to={to}><Image {...props} /></Link>
  : <Anchor href={href} target={target}><Image {...props} /></Anchor>

Image.propTypes = {
  alt: PropTypes.string,
  href: PropTypes.string,
  to: PropTypes.string,
}

export default ImageLink
