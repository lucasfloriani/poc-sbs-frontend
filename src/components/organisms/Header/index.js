import React from 'react'
import styled from 'styled-components'
import logo from '@public/img/logo.png'
import { getShadow, media } from '@theme'
import {
  Block, Icon, IconLink, ImageLink, Menu, MenuItem,
} from 'components'

const Wrapper = styled(Block)`
  box-shadow: ${getShadow('small')};
  display: flex;
  justify-content: center;

  ${media.lessThan('small')`
    padding: 0.5rem;
  `}
`

const InnerWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  width: 100%;

  ${media.lessThan('extraSmall')`
    flex-direction: column;
  `}
`

const HeaderActions = styled.div`
  ${media.lessThan('extraSmall')`
    margin-top: 10px;
  `}
`

const ControlPanelHeader = (props) => {
  const iconStyle = {
    color: { type: 'grayscale', position: 4 },
    hoverColor: { type: 'grayscale', position: 3 },
    style: { margin: '8px' },
  }

  return (
    <Wrapper {...props}>
      <InnerWrapper>
        <ImageLink alt="Logo" to="/" src={logo} />
        <HeaderActions>
          <Menu toogleComponent={onClick => (<Icon icon="menu" onClick={onClick} {...iconStyle} />)}>
            <MenuItem to="/">Home</MenuItem>
          </Menu>
          <IconLink to="/user" icon="user" {...iconStyle} />
          <IconLink to="/logout" icon="logout" {...iconStyle} />
        </HeaderActions>
      </InnerWrapper>
    </Wrapper>
  )
}

export default ControlPanelHeader
