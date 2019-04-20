import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { prop } from 'styled-tools'
import Img from 'react-image'
import VisibilitySensor from 'react-visibility-sensor'
import { getCubicBezier } from '@theme'

const styles = css`
  box-sizing: border-box;
  display: flex;
  height: ${prop('height')};
  max-height: ${prop('maxHeight')};
  max-width: ${prop('maxWidth')};
  transition: .3s transform ${getCubicBezier()};
  width: ${prop('width')};

  :hover {
    transform: scale(${prop('zoom')})
  }
`
const LazyImage = styled(({
  height, lazyLoad, maxHeight, maxWidth, width, zoom, ...props
}) => (
  <VisibilitySensor>
    <Img {...props} />
  </VisibilitySensor>
))`${styles}`

const StyledImg = styled(({
  height, lazyLoad, maxHeight, maxWidth, width, zoom, ...props
}) => <Img {...props} />)`${styles}`

const Image = ({ lazyLoad, ...props }) => lazyLoad ? <LazyImage {...props} /> : <StyledImg {...props} />

Image.propTypes = {
  alt: PropTypes.string.isRequired,
  height: PropTypes.string,
  lazyLoad: PropTypes.bool,
  maxHeight: PropTypes.string,
  maxWidth: PropTypes.string,
  width: PropTypes.string,
  zoom: PropTypes.number,
}

Image.defaultProps = {
  height: 'auto',
  lazyLoad: true,
  maxHeight: 'initial',
  maxWidth: 'initial',
  width: 'auto',
  zoom: 1,
}

export default Image
