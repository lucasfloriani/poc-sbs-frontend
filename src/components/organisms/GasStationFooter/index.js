import React from 'react'
import { Copyright } from 'components'
import { StyledFooter, Wrapper } from './style'

const GasStationFooter = ({ ...props }) => (
  <StyledFooter>
    <Wrapper>
      <Copyright color={{ type: 'grayscale', position: 4 }} year={2019} {...props} />
    </Wrapper>
  </StyledFooter>
)

export default GasStationFooter
