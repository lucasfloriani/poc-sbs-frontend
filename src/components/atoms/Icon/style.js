import React from 'react'
import styled from 'styled-components'
import { palette } from 'styled-theme'
import { getCubicBezier, getSize } from '@theme'

export const Wrapper = styled(({
  color, hoverColor, size, ...props
}) => <span {...props} />)`
  box-sizing: border-box;
  color: ${({ color: { position, type } }) => palette(type, position)};
  display: inline-block;
  font-size: ${({ size }) => getSize(size)};
  height: 1em;
  transition: .3s color ${getCubicBezier()};
  width: 1em;

  :hover {
    color: ${({ hoverColor }) => palette(hoverColor.type, hoverColor.position)}
  }

  & > svg {
    fill: currentcolor;
    height: 100%;
    stroke: currentcolor;
    width: 100%;
  }
`
