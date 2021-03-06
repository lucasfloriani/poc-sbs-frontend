import React from 'react'
import { StyledFooter, Wrapper } from './style'
import Copyright from '@molecules/Copyright'

const GasStationFooter = ({ ...props }) => (
  <StyledFooter>
    <Wrapper>
      <Copyright color={{ type: 'grayscale', position: 4 }} year={2019} {...props} />
    </Wrapper>
  </StyledFooter>
)

export default GasStationFooter
