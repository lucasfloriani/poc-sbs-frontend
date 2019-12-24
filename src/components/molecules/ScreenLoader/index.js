import React from 'react'
import { Wrapper } from './style'
import Loader from '@atoms/Loader'

const ScreenLoader = ({ ...props }) => (
  <Wrapper {...props}>
    <Loader margin="10px" size={30} sizeUnit="px" />
  </Wrapper>
)

export default ScreenLoader
