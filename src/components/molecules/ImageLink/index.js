import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Image, Link } from 'components'

const Anchor = styled.a`
  outline: none;
`

const ImageLink = ({
  href, to, target, ...props
}) => {
  if (to) return <Link to={to}><Image {...props} /></Link>
  return <Anchor href={href} target={target}><Image {...props} /></Anchor>
}

Image.propTypes = {
  alt: PropTypes.string,
  href: PropTypes.string,
  to: PropTypes.string,
}

export default ImageLink
