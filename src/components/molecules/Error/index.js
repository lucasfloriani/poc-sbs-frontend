import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import { getShadow } from '@theme'

const Error = styled.div`
  background-color: ${palette('danger', 2)};
  border-left: 5px solid ${palette('danger', 0)};
  border-radius: 0 0 3px 3px;
  box-shadow: ${getShadow()};
  box-sizing: border-box;
  color: ${palette('grayscale', 4)};
  font-family: ${font('primary')};
  font-size: .8em;
  letter-spacing: 0.4px;
  padding: 6px;
  width: 100%;
`

export default Error
