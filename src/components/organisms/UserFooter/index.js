import React from 'react'
import { StyledFooter, Wrapper } from './style'
import Copyright from '@molecules/Copyright'

const UserFooter = ({ ...props }) => (
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

export default UserFooter
