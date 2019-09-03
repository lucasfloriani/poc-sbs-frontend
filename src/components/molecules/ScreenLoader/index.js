import React from 'react'
import { Loader } from 'components'
import { Wrapper } from './style'

const ScreenLoader = ({ ...props }) => (
  <Wrapper {...props}>
    <Loader margin="10px" size={30} sizeUnit="px" />
  </Wrapper>
)

export default ScreenLoader
