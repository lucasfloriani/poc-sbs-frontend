import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { prop } from 'styled-tools'

const Grid = styled.div`
  ${({ columnLength }) => columnLength && css`grid-column: ${columnLength};`}
  display: grid;
  grid-gap: ${({ gap }) => gap};
  grid-template-columns: ${({ column }) => column};
  ${({ halign }) => halign && css`justify-content: ${halign};`}
  ${({ rows }) => rows && css`grid-template-rows: ${rows}`};
  ${({ valign }) => valign && css`align-items: ${valign};`}
  width: ${prop('width')};
`

Grid.propTypes = {
  column: PropTypes.any,
  columnLength: PropTypes.any,
  gap: PropTypes.string,
  halign: PropTypes.string,
  rows: PropTypes.any,
  valign: PropTypes.string,
}

Grid.defaultProps = {
  column: '1fr',
  gap: '15px',
  width: '100%',
}

export default Grid
