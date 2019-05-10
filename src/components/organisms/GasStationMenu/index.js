import React from 'react'
import styled from 'styled-components'
import logo from '@public/img/logo.png'
import { getShadow, media } from '@theme'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Creators as AuthActions } from '@store/ducks/auth'
import {
  Block, Icon, ImageLink, Menu, MenuItem,
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

const GasStationMenu = ({ logout }) => {
  const iconStyle = {
    color: { type: 'grayscale', position: 4 },
    hoverColor: { type: 'grayscale', position: 3 },
    style: { margin: '8px' },
  }

  return (
    <Wrapper>
      <InnerWrapper>
        <ImageLink height="50px" alt="Logo" to="/gas-station" src={logo} />
        <HeaderActions>
          <Menu toogleComponent={onClick => (<Icon icon="menu" onClick={onClick} {...iconStyle} />)}>
            <MenuItem to="/gas-station">Home</MenuItem>
            <MenuItem to="/gas-station/price-fuel">Criar Preço de Combustível</MenuItem>
          </Menu>
          <Icon icon="logout" onClick={() => logout()} {...iconStyle} />
        </HeaderActions>
      </InnerWrapper>
    </Wrapper>
  )
}

const mapDispatchToProps = dispatch => bindActionCreators(AuthActions, dispatch)

export default connect(null, mapDispatchToProps)(GasStationMenu)