import React from 'react'
import styled from 'styled-components'
import logo from '@public/img/logo.png'
import { getShadow, media } from '@theme'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Creators as AuthActions } from '@store/ducks/auth'
import {
  Block, Flex, Icon, IconLink, ImageLink, Menu, MenuItem,
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
`

const UserMenu = ({ logout }) => {
  const iconStyle = {
    color: { type: 'grayscale', position: 4 },
    hoverColor: { type: 'grayscale', position: 3 },
    style: { margin: '8px' },
  }

  return (
    <Wrapper>
      <InnerWrapper>
        <ImageLink height="50px" alt="Logo" to="/user" src={logo} />
        <Flex width="auto">
          <Menu toogleComponent={onClick => (<Icon icon="menu" onClick={onClick} {...iconStyle} />)}>
            <MenuItem to="/user">Home</MenuItem>
            <MenuItem to="/user/bookmarks">Favoritos</MenuItem>
            <MenuItem to="/user/complaints">Denuncias</MenuItem>
            <MenuItem to="/user/ratings">Avaliações</MenuItem>
            <MenuItem to="/user/edit">Editar Usuário</MenuItem>
          </Menu>
          <IconLink to="/user/edit" icon="user" {...iconStyle} />
          <Icon icon="logout" onClick={() => logout()} {...iconStyle} />
        </Flex>
      </InnerWrapper>
    </Wrapper>
  )
}

const mapDispatchToProps = dispatch => bindActionCreators(AuthActions, dispatch)

export default connect(null, mapDispatchToProps)(UserMenu)
