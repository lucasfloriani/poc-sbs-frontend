import styled from 'styled-components'
import { palette } from 'styled-theme'
import { getShadow, getSize } from '@theme'
import { Container } from 'components'

export const StyledFooter = styled.footer`
  background-color: ${palette('primary', 1)};
  box-shadow: ${getShadow('small')};
  padding: ${getSize('small')};
`
export const Wrapper = styled(Container)`
  display: grid;
  grid-gap: 30px;
  grid-template-columns: 1fr;
  margin: auto;
`
