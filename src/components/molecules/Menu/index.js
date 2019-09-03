import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Icon } from 'components'
import {
  BackButton,
  MenuList,
  Modal,
  StyledMenu,
  Wrapper,
} from './style'

const Menu = ({ children, toogleComponent, ...props }) => {
  const [open, setOpen] = useState(false)
  const openMenu = () => setOpen(true)
  const closeMenu = () => setOpen(false)

  return (
    <>
      { toogleComponent(openMenu) }
      <Wrapper open={open}>
        <Modal onClick={closeMenu} />
        <StyledMenu {...props} open={open}>
          <BackButton
            backgroundColor={{ type: 'primary', position: 1 }}
            hoverBackgroundColor={{ type: 'primary', position: 0 }}
            onClick={closeMenu}
          >
            <Icon icon="leftArrow" color={{ type: 'grayscale', position: 4 }} size="extraSmall" />
            Voltar
          </BackButton>
          <MenuList>{children}</MenuList>
        </StyledMenu>
      </Wrapper>
    </>
  )
}

Menu.propTypes = {
  children: PropTypes.any.isRequired,
  toogleComponent: PropTypes.func.isRequired,
}

export default Menu
