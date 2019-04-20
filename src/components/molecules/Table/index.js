import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { palette } from 'styled-theme'
import { TableCell, TableRow } from 'components'
import { getShadow, media } from '@theme'

const Wrapper = styled.div`
  align-self: flex-start;
  border-radius: 3px;
  box-shadow: ${getShadow('extraSmall')};
  overflow: hidden;
  width: 100%;
`

const StyledTable = styled.table`
  border-collapse: collapse;
  position: relative;
  width: 100%;
`

const StyledTHead = styled.thead`
  ${media.lessThan('medium')`
    display: none;
  `}
`

const StyledBody = styled.tbody`
  ${media.lessThan('medium')`
    background-color: ${palette('primary', 0)};
    display: flex;
    flex-direction: column;
    padding: 0 8px;
  `}
`

const Table = ({
  caption, children, foot, head, ...props
}) => {
  return (
    <Wrapper>
      <StyledTable {...props}>
        {caption && caption}
        <StyledTHead>
          <TableRow>
            {head.map(headTitle => <TableCell key={headTitle.split(' ').join('-').toLowerCase()} heading>{headTitle}</TableCell>)}
          </TableRow>
        </StyledTHead>
        <StyledBody>{children}</StyledBody>
        {foot && <tfoot>{foot}</tfoot>}
      </StyledTable>
    </Wrapper>
  )
}

Table.propTypes = {
  caption: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  children: PropTypes.arrayOf(PropTypes.node),
  head: PropTypes.arrayOf(PropTypes.string).isRequired,
  foot: PropTypes.node,
  reverse: PropTypes.bool,
}

export default Table
