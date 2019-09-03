import styled, { css } from 'styled-components'
import { palette } from 'styled-theme'
import { getShadow } from '@theme'

export const StyledForm = styled.form`
  ${({ onlyWrapper }) => !onlyWrapper && css`
    border-radius: 10px;
    box-shadow: ${getShadow()};
  `}
  background-color: ${palette('grayscale', 4)};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  ${({ header, footer }) => (footer || header) && css`padding: 10px 12px;`}
  width: 100%;
`
export const FormContent = styled.div`
  ${({ header, footer }) => (!footer || !header) && css`padding: 10px 12px;`}
`

export const Footer = styled.div`
  margin-top: 8px;
`

export const Header = styled.div`
  margin-bottom: 8px;
`
