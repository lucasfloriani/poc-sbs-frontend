import React from 'react'
import logo from '@public/img/logo-branca.png'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Creators as AuthActions } from '@store/ducks/auth'
import { Creators as GasStationActions } from '@store/ducks/gasStation'
import fuelType from '@enums/fuelType'
import UserType from '@enums/userType'
import {
  Flex,
  HasPermission,
  Icon,
  IconLink,
  ImageLink,
  Menu,
  MenuItem,
  Select,
} from 'components'
import { FuelTypeContainer, InnerWrapper, Wrapper } from './style'

const iconStyle = {
  color: { type: 'grayscale', position: 4 },
  hoverColor: { type: 'grayscale', position: 3 },
  style: { margin: '8px' },
}

const UserMenu = ({ fuelTypeName, logout, updateFuelType }) => (
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
            <MenuItem to="/register/user">Cadastrar-se como usuário</MenuItem>
            <MenuItem to="/register/gas-station">Cadastrar-se como posto</MenuItem>
            <MenuItem to="/forgot-password">Recuperar senha</MenuItem>
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

const mapStateToProps = ({ auth: { fuelTypeName } }) => ({ fuelTypeName })
const mapDispatchToProps = dispatch => bindActionCreators({ ...AuthActions, ...GasStationActions }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu)
