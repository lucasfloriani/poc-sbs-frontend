import PropTypes from 'prop-types'
import styled from 'styled-components'
import { palette } from 'styled-theme'

const Line = styled.hr`
  color: ${palette('grayscale', 4)};
  margin-bottom: ${({ margin }) => margin}px;
  margin-top: ${({ margin }) => margin}px;
  width: 100%;
`

Line.propTypes = {
  margin: PropTypes.number,
}

Line.defaultProps = {
  margin: 0,
}

export default Line
