import PropTypes from 'prop-types'
import styled from 'styled-components'

const Grid = styled.div`
  display: grid;
  grid-gap: ${({ gap }) => gap};
  grid-column: ${({ column }) => column};
`

Grid.propTypes = {
  column: PropTypes.any,
  gap: PropTypes.string,
}

Grid.defaultProps = {
  column: 1,
  gap: '15px',
}

export default Grid
