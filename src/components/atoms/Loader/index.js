import React from 'react'
import styled from 'styled-components'
import { PulseLoader } from 'react-spinners'

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  min-height: 100%;
  min-width: 100%;
`

const Loader = ({ ...props }) => (
  <Wrapper>
    <PulseLoader {...props} color="#2aa2b0" />
  </Wrapper>
)

export default Loader
