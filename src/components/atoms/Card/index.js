import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { palette } from 'styled-theme'
import { getOptionsFrom, getShadow, getSize } from '@theme'

const Card = styled.div`
  background-color: ${({ backgroundColor: { position, type } }) => palette(type, position)};
  border-radius: 10px;
  box-shadow: ${({ shadowSize }) => getShadow(shadowSize)};
  ${({ margin }) => margin && css`margin: ${getSize(margin)};`};
  ${({ padding }) => padding && css`padding: ${getSize(padding)};`};
  overflow: hidden;
`

Card.propTypes = {
  backgroundColor: PropTypes.shape({
    position: PropTypes.number,
    type: PropTypes.oneOf(getOptionsFrom('palette')),
  }),
  margin: PropTypes.oneOf(getOptionsFrom('sizes')),
  padding: PropTypes.oneOf(getOptionsFrom('sizes')),
  shadowSize: PropTypes.oneOf(getOptionsFrom('shadows')),
}

Card.defaultProps = {
  backgroundColor: { type: 'grayscale', position: 4 },
  shadowSize: 'extraSmall',
}

export default Card
