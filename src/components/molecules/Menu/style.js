import styled from 'styled-components'
import { palette } from 'styled-theme'
import { getCubicBezier } from '@theme'
import Button from '@atoms/Button'

export const Wrapper = styled.div`
  height: 100vh;
  opacity: ${({ open }) => open ? 1 : 0};
  position: fixed;
  right: 0;
  top: 0;
  transition: .5s opacity ${getCubicBezier()}, .5s z-index ${getCubicBezier()};
  width: 100%;
  z-index: ${({ open }) => open ? 300 : -1};
`

export const StyledMenu = styled.nav`
  background-color: ${palette('primary', 2)};
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow-y: auto;
  padding: 0;
  position: absolute;
  right: 0;
  top: 0;
  transform: ${({ open }) => open ? 'translate(0, 0)' : 'translate(100%, 0)'};
  transition: .5s transform ${getCubicBezier()};
  width: 260px;
`

export const Modal = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  height: 100vh;
  width: 100%;
`

export const MenuList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

export const BackButton = styled(Button)`
  border-radius: 0;
  flex-basis: auto;
  flex-shrink: 0;
`
