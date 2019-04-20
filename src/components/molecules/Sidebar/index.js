import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { palette } from 'styled-theme'
import { getOptionsFrom, getShadow, media } from '@theme'

const StyledSidebar = styled.aside`
  background-color: ${({ backgroundColor }) => palette(backgroundColor.type, backgroundColor.position)};
  border-radius: 3px;
  box-shadow: ${getShadow()};
  box-sizing: border-box;
  flex-basis: ${({ width }) => width};
  flex-shrink: 0;
  ${({ marginSide }) => css`margin-${marginSide}: 10px`}
  padding: ${({ padding }) => padding};

  ${media.lessThan('medium')`
    margin: 0;
  `}
`

StyledSidebar.propTypes = {
  backgroundColor: PropTypes.shape({
    type: PropTypes.oneOf(getOptionsFrom('palette')),
    position: PropTypes.number,
  }),
  marginSide: PropTypes.oneOf(['left', 'right']),
  padding: PropTypes.string,
  width: PropTypes.string,
}

StyledSidebar.defaultProps = {
  backgroundColor: { type: 'primary', position: 0 },
  padding: '10px 12px',
  width: '290px',
}

const Sidebar = ({ children, ...props }) => {
  return (
    <StyledSidebar {...props}>
      {children}
    </StyledSidebar>
  )
}

export default Sidebar
