import styled from 'styled-components'
import { palette } from 'styled-theme'
import { getShadow, media } from '@theme'

const TableRow = styled.tr`
  border-bottom: 1px solid ${palette('grayscale', 4)};

  :hover > td {
    background-color: ${palette('grayscale', 3)};
  }

  ${media.lessThan('medium')`
    background-color: #fff;
    box-shadow: ${getShadow('small')};
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    margin: 8px 0;
    overflow: hidden;
    padding: 0.75em;
  `}
`

export default TableRow
