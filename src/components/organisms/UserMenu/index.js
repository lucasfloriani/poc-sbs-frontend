import React from 'react'
import styled from 'styled-components'
import logo from '@public/img/logo.png'
import { getShadow, media } from '@theme'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Creators as AuthActions } from '@store/ducks/auth'
import UserType from '@enums/userType'
import {
  Block, Flex, HasPermission, Icon, IconLink, ImageLink, Menu, MenuItem,
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
        <ImageLink height="50px" alt="Logo" to="/" src={logo} />
        <Flex width="auto">
          <Menu toogleComponent={onClick => (<Icon icon="menu" onClick={onClick} {...iconStyle} />)}>
            <MenuItem to="/">Home</MenuItem>
            <HasPermission logged allowedUserType={[UserType.user]}>
              <MenuItem to="/user/bookmarks">Favoritos</MenuItem>
              <MenuItem to="/user/ratings">Avaliações</MenuItem>
              <MenuItem to="/user/edit">Editar Usuário</MenuItem>
            </HasPermission>
            <HasPermission>
              <MenuItem to="/login">Login</MenuItem>
              <MenuItem to="/register">Cadastrar-se</MenuItem>
            </HasPermission>
          </Menu>
          <HasPermission logged allowedUserType={[UserType.user]}>
            <IconLink to="/user/edit" icon="user" {...iconStyle} />
            <Icon icon="logout" onClick={() => logout()} {...iconStyle} />
          </HasPermission>
        </Flex>
      </InnerWrapper>
    </Wrapper>
  )
}

const mapDispatchToProps = dispatch => bindActionCreators(AuthActions, dispatch)

export default connect(null, mapDispatchToProps)(UserMenu)
