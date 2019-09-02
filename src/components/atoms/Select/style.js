import styled, { css } from 'styled-components'
import { font, palette } from 'styled-theme'
import { getCubicBezier, getSize, getShadow } from '@theme'

export const StyledSelect = styled.select`
  border: 1px solid ${({ borderColor }) => palette(borderColor.type, borderColor.position)};
  border-radius: 3px;
  box-shadow: ${({ shadow }) => getShadow(shadow)};
  font-family: ${font('primary')};
  font-size: ${({ fontSize }) => getSize(fontSize)};
  outline: none;
  padding: 9px 12px;
  transition: .3s border-color ${getCubicBezier()};
  width: 100%;

  ${({ active }) => active && css`
    border-color: ${({ focusBorderColor }) => palette(focusBorderColor.type, focusBorderColor.position)};
  `}
`
