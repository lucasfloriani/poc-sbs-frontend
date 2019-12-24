import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { InnerWrapper, Wrapper } from './style'
import logo from '@assets/img/logo-branca.png'
import { Creators as AuthActions } from '@store/ducks/auth'
import Flex from '@atoms/Flex'
import Icon from '@atoms/Icon'
import ImageLink from '@molecules/ImageLink'
import Menu from '@molecules/Menu'
import MenuItem from '@molecules/MenuItem'

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
        <Menu toogleComponent={onClick => (<Icon name="Menu" onClick={onClick} {...iconStyle} />)}>
          <MenuItem to="/gas-station">Home</MenuItem>
          <MenuItem to="/gas-station/price-fuel">Criar Produto</MenuItem>
          <MenuItem to="/gas-station/about-us">Sobre nós</MenuItem>
        </Menu>
        <Icon name="Logout" onClick={() => logout()} {...iconStyle} />
      </Flex>
    </InnerWrapper>
  </Wrapper>
)

GasStationMenu.propTypes = {
  logout: PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch => bindActionCreators(AuthActions, dispatch)

export default connect(null, mapDispatchToProps)(GasStationMenu)
