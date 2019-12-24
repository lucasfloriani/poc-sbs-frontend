import React from 'react'
import styled from 'styled-components'
import { ifProp, prop } from 'styled-tools'
import { font, key, palette } from 'styled-theme'
import Image from '@atoms/Image'
import Paragraph from '@atoms/Paragraph'

export const Wrapper = styled.div`
  align-items: center;
  grid-column: 1 / -1;
  justify-content: center;
  width: 100%;
`

export const FieldWrapper = styled(({ isDragActive, height, ...props }) => <div {...props} />)`
  align-items: center;
  background-color: ${ifProp('isDragActive', palette('primary', 0), palette('grayscale', 4))};
  border-radius: 3px;
  box-shadow: ${key(['shadows', 'extraSmall'])};
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: ${prop('height')};
  outline: none;
  overflow: hidden;
  padding: 10px 12px;
  transition: .6s background-color ${key(['cubicBezier', 'standard'])},
              .3s box-shadow ${key(['cubicBezier', 'standard'])};

  &:hover {
    box-shadow: ${key(['shadows', 'medium'])};
  }
`

export const Message = styled(({ isDragActive, ...props }) => <Paragraph {...props} />)`
  color: ${ifProp('isDragActive', palette('grayscale', 4), palette('grayscale', 0))};
  padding: 6px;
  text-align: center;
  transition: .6s color ${key(['cubicBezier', 'standard'])};
`

export const StyledImage = styled(Image)`
  display: ${ifProp('src', 'block', 'none')};
  max-height: ${prop('maxHeight')};
  max-width: 100%;
`

export const Error = styled.div`
  background-color: ${palette('danger', 2)};
  border-left: 5px solid ${palette('danger', 0)};
  border-radius: 0 0 3px 3px;
  box-shadow: ${key(['shadows', 'extraSmall'])};
  box-sizing: border-box;
  color: ${palette('grayscale', 4)};
  font-family: ${font('primary')};
  font-size: .8em;
  letter-spacing: 0.4px;
  padding: 6px;
`
