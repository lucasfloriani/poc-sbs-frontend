import PropTypes from 'prop-types'
import styled from 'styled-components'
import { palette } from 'styled-theme'
import { getCubicBezier, getOptionsFrom, getShadow } from '@theme'

const Badge = styled.div`
  align-items: center;
  background-color: ${({ backgroundColor: { type, position } }) => palette(type, position)};
  border-radius: 30px;
  box-shadow: ${getShadow('extraSmall')};
  cursor: pointer;
  display: flex;
  justify-content: center;
  margin: 3px;
  padding: 8px;
  transition: 0.4s box-shadow ${getCubicBezier()}, 0.4s transform ${getCubicBezier()};

  &:hover {
    box-shadow: ${getShadow('small')};
    transform: scale(1.15);
  }
`

Badge.propTypes = {
  backgroundColor: PropTypes.shape({
    position: PropTypes.number,
    type: PropTypes.oneOf(getOptionsFrom('palette')),
  }),
}

Badge.defaultProps = {
  backgroundColor: { type: 'primary', position: 2 },
}

export default Badge
