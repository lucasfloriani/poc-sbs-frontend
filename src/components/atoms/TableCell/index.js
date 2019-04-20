import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import {
  getCubicBezier,
  getFontWeight,
  getSize,
  getShadow,
  media,
} from '@theme'

const StyledTableCell = styled.th`
  background-color: ${({ heading }) => heading ? palette('grayscale', 1) : palette('grayscale', 4)};
  color: ${({ heading }) => heading ? palette('grayscale', 4) : palette('grayscale', 0)};
  font-family: ${font('primary')};
  font-size: ${getSize('extraSmall')};
  font-weight: normal;
  padding: 0.75em;
  transition: .3s color ${getCubicBezier()}, .3s background-color ${getCubicBezier()};

  ${media.greaterThan('medium')`
    &:hover {
      background-color: ${({ heading }) => heading ? palette('grayscale', 2) : palette('primary', 2)};
    }
  `}

  ${media.lessThan('medium')`
    border-radius: 3px;
    box-shadow: ${getShadow('small')};
    margin: 6px 0;
    overflow: hidden;
    padding: 3px;

    &[data-heading] {
      ::before {
        background-color: ${palette('grayscale', 1)};
        color: ${palette('grayscale', 4)};
        content: attr(data-heading);
        display: block;
        font-family: ${font('primary')};
        font-size: ${getSize('small')};
        font-weight: ${getFontWeight('regular')};
        margin: -3px;
        margin-bottom: 3px;
        padding: 0.75em;
      }
    }
  `}
`

const TableCell = ({ heading, ...props }) => (
  <StyledTableCell
    as={heading ? 'th' : 'td'}
    heading={heading}
    {...props}
  />
)

TableCell.propTypes = {
  heading: PropTypes.bool,
}

export default TableCell
