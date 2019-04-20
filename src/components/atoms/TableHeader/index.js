import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { media } from '@theme'
import {
  Caption,
  Flex,
  Heading,
  Button,
} from 'components'

const StyledFlex = styled(Flex)`
  ${media.lessThan('medium')`
    flex-direction: column;
  `}
`

const StyledHeading = styled(Heading)`
  ${media.lessThan('medium')`
    margin-bottom: 10px;
  `}
`

const TableHeader = ({ title, buttonTitle, buttonUrl }) => (
  <Caption>
    <StyledFlex valign="center" halign="space-between">
      <StyledHeading>{title}</StyledHeading>
      <Button to={buttonUrl}>{buttonTitle}</Button>
    </StyledFlex>
  </Caption>
)

TableHeader.propTypes = {
  title: PropTypes.string.isRequired,
  buttonTitle: PropTypes.string.isRequired,
  buttonUrl: PropTypes.string.isRequired,
}

export default TableHeader
