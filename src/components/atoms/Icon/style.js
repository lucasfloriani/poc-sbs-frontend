import React from 'react'
import styled, { css } from 'styled-components'
import { key, palette } from 'styled-theme'

export const Wrapper = styled(({
  color, hoverColor, size, ...props
}) => <span {...props} />)`
  box-sizing: border-box;
  color: ${({ color: { position, type } }) => palette(type, position)};
  ${({ onClick }) => onClick && css`cursor: pointer;`}
  display: inline-block;
  font-size: ${({ size }) => key(['sizes', size])};
  height: 1em;
  transition: .3s color ${key(['cubicBezier', 'standard'])};
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
