import React, { useState } from 'react'
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
  background-color: ${palette('primary', 2)};
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 0;
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
  margin: 0;
  padding: 0;
`

const BackButton = styled(Button)`
  border-radius: 0;
  flex-basis: auto;
  flex-shrink: 0;
`

const Menu = ({ children, toogleComponent, ...props }) => {
  const [open, setOpen] = useState(false)
  const openMenu = () => setOpen(true)
  const closeMenu = () => setOpen(false)

  return (
    <React.Fragment>
      { toogleComponent(openMenu) }
      <Wrapper open={open}>
        <Modal onClick={closeMenu} />
        <StyledMenu {...props} open={open}>
          <BackButton
            backgroundColor={{ type: 'primary', position: 1 }}
            hoverBackgroundColor={{ type: 'primary', position: 0 }}
            onClick={closeMenu}
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

Menu.propTypes = {
  children: PropTypes.any.isRequired,
  toogleComponent: PropTypes.func.isRequired,
}

export default Menu
