import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const Grid = styled.div`
  display: grid;
  grid-gap: ${({ gap }) => gap};
  grid-template-columns: ${({ column }) => column};
  ${({ halign }) => halign && css`justify-content: ${halign};`}
  ${({ valign }) => valign && css`align-items: ${valign};`}
  ${({ columnLength }) => columnLength && css`grid-column: ${columnLength};`}
  ${({ rows }) => rows && css`grid-template-rows: ${rows}`};
  width: 100%;
`

Grid.propTypes = {
  column: PropTypes.any,
  columnLength: PropTypes.any,
  halign: PropTypes.string,
  gap: PropTypes.string,
  rows: PropTypes.any,
  valign: PropTypes.string,
}

Grid.defaultProps = {
  column: '1fr',
  gap: '15px',
}

export default Grid
