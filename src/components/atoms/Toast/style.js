import styled from 'styled-components'
import { palette } from 'styled-theme/dist'
import { getShadow } from '@theme'

export const StyledToast = styled.div`
  background-color: ${({ type }) => type === 'success' ? palette('success', 0) : palette('error', 0)};
  border-radius: 3px;
  box-shadow: ${getShadow()};
  cursor: pointer;
  margin: 10px 0;
  padding: .6em 1.2em;
  text-align: center;
  width: 250px;
`
