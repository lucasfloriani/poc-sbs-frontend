import React from 'react'
import styled from 'styled-components'
import logo from '@public/img/logo-branca.png'
import { getShadow, media } from '@theme'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Creators as AuthActions } from '@store/ducks/auth'
import { Creators as GasStationActions } from '@store/ducks/gasStation'
import fuelType from '@enums/fuelType'
import UserType from '@enums/userType'
import {
  Block,
  Flex,
  HasPermission,
  Icon,
  IconLink,
  ImageLink,
  Menu,
  MenuItem,
  Select,
} from 'components'

const Wrapper = styled(Block)`
  box-shadow: ${getShadow('small')};
  display: flex;
  justify-content: center;

  ${media.lessThan('small')`
    padding: 0.5rem;
  `}
`

const InnerWrapper = styled(Flex)`
  max-width: 1200px;

  ${media.lessThan('extraSmall')`
    flex-direction: column;
  `}
`

const FuelTypeContainer = styled(Flex)`
  margin-top: 10px;
  width: auto;

  ${media.lessThan('extraSmall')`
    margin-top: 20px;
  `}
`


const UserMenu = ({ fuelTypeName, logout, updateFuelType }) => {
  const iconStyle = {
    color: { type: 'grayscale', position: 4 },
    hoverColor: { type: 'grayscale', position: 3 },
    style: { margin: '8px' },
  }

  return (
    <Wrapper>
      <InnerWrapper valign="center" halign="space-between">
        <ImageLink height="50px" alt="Logo" to="/" src={logo} />
        <FuelTypeContainer>
          <Select
            options={Object.entries(fuelType).map(type => [type[1], type[1]])}
            id="fuelType"
            name="fuelType"
            labelTitle="Tipo de combustível"
            active
            value={fuelTypeName}
            onChange={e => updateFuelType(e.currentTarget.value)}
          />
        </FuelTypeContainer>
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
            <MenuItem to="/about-us">Sobre nós</MenuItem>
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

const mapStateToProps = ({ auth: { fuelTypeName } }) => ({ fuelTypeName })
const mapDispatchToProps = dispatch => bindActionCreators({ ...GasStationActions, ...AuthActions }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu)
