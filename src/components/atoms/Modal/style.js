import React from 'react'
import styled from 'styled-components'
import { getCubicBezier } from '@theme'

export const Wrapper = styled(({ children, open, ...props }) => <div {...props}>{children}</div>)`
  height: 100vh;
  opacity: ${({ open }) => open ? 1 : 0};
  position: fixed;
  right: 0;
  top: 0;
  transition: .5s opacity ${getCubicBezier()}, .5s z-index ${getCubicBezier()};
  width: 100%;
  z-index: ${({ open }) => open ? 300 : -1};
`

export const Background = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  height: 100vh;
  width: 100%;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  left: 50%;
  max-height: 90vh;
  overflow-y: auto;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  transition: .5s transform ${getCubicBezier()};
  max-width: 90vw;
`
