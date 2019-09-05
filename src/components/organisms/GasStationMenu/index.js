import React from 'react'
import logo from '@public/img/logo-branca.png'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Creators as AuthActions } from '@store/ducks/auth'
import {
  Flex,
  Icon,
  ImageLink,
  Menu,
  MenuItem,
} from 'components'
import { InnerWrapper, Wrapper } from './style'

const iconStyle = {
  color: { type: 'grayscale', position: 4 },
  hoverColor: { type: 'grayscale', position: 3 },
  style: { margin: '8px' },
}

const GasStationMenu = ({ logout }) => (
  <Wrapper>
    <InnerWrapper>
      <ImageLink height="50px" alt="Logo" to="/gas-station" src={logo} />
      <Flex width="auto">
        <Menu toogleComponent={onClick => (<Icon icon="menu" onClick={onClick} {...iconStyle} />)}>
          <MenuItem to="/gas-station">Home</MenuItem>
          <MenuItem to="/gas-station/price-fuel">Criar Produto</MenuItem>
          <MenuItem to="/gas-station/about-us">Sobre nós</MenuItem>
        </Menu>
        <Icon icon="logout" onClick={() => logout()} {...iconStyle} />
      </Flex>
    </InnerWrapper>
  </Wrapper>
)

const mapDispatchToProps = dispatch => bindActionCreators(AuthActions, dispatch)

export default connect(null, mapDispatchToProps)(GasStationMenu)
