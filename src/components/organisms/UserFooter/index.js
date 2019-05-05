import React from 'react'
import styled from 'styled-components'
import { palette } from 'styled-theme'
import { getShadow, getSize } from '@theme'
import { Container, Copyright } from 'components'

const StyledFooter = styled.footer`
  background-color: ${palette('primary', 1)};
  box-shadow: ${getShadow('small')};
  padding: ${getSize('small')};
`
const Wrapper = styled(Container)`
  display: grid;
  grid-gap: 30px;
  grid-template-columns: 1fr;
  margin: auto;
`

const UserFooter = ({ ...props }) => {
  return (
    <StyledFooter>
      <Wrapper>
        <Copyright
          color={{ type: 'grayscale', position: 4 }}
          year={2019}
          {...props}
        />
      </Wrapper>
    </StyledFooter>
  )
}

export default UserFooter
