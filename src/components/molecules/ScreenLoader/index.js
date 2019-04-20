import React from 'react'
import styled from 'styled-components'
import { Loader } from 'components'

const Wrapper = styled.div`
  display: 'flex';
  height: '100vh';
  justify-content: 'center';
  width: '100%';
`

const ScreenLoader = ({ ...props }) => (
  <Wrapper {...props}>
    <Loader margin="10px" size={30} sizeUnit="px" />
  </Wrapper>
)

export default ScreenLoader
