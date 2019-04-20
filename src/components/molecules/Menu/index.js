import React from 'react'
import styled from 'styled-components'
import { palette } from 'styled-theme'
import PropTypes from 'prop-types'
import { Button, Icon } from 'components'
import { getCubicBezier } from '@theme'

const Wrapper = styled.div`
  height: 100vh;
  position: fixed;
  right: 0;
  opacity: ${({ open }) => open ? 1 : 0};
  top: 0;
  transition: .5s opacity ${getCubicBezier()}, .5s z-index ${getCubicBezier()};
  width: 100%;
  z-index: ${({ open }) => open ? 300 : -1};
`

const StyledMenu = styled.nav`
  background-color: ${palette('secondary', 0)};
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 10px;
  overflow-y: auto;
  position: absolute;
  right: 0;
  top: 0;
  transform: ${({ open }) => open ? 'translate(0, 0)' : 'translate(100%, 0)'};
  transition: .5s transform ${getCubicBezier()};
  width: 260px;
`

const Modal = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  height: 100vh;
  width: 100%;
`

const MenuList = styled.ul`
  list-style: none;
  margin: 10px 0;
  padding: 0;
`

const BackButton = styled(Button)`
  flex-basis: auto;
  flex-shrink: 0;
`

class Menu extends React.Component {
  static propTypes = {
    children: PropTypes.any,
    toogleComponent: PropTypes.func,
  }

  state = { open: false }

  handleClick = () => this.setState(state => ({ open: !state.open }))

  render() {
    const { open } = this.state
    const { children, toogleComponent } = this.props

    return (
      <React.Fragment>
        { toogleComponent(this.handleClick) }
        <Wrapper open={open}>
          <Modal onClick={this.handleClick} />
          <StyledMenu {...this.props} open={open}>
            <BackButton
              backgroundColor={{ type: 'primary', position: 0 }}
              hoverBackgroundColor={{ type: 'primary', position: 1 }}
              onClick={this.handleClick}
            >
              <Icon
                icon="leftArrow"
                color={{ type: 'grayscale', position: 4 }}
                size="extraSmall"
              />
              Voltar
            </BackButton>
            <MenuList>
              {children}
            </MenuList>
          </StyledMenu>
        </Wrapper>
      </React.Fragment>
    )
  }
}

export default Menu
