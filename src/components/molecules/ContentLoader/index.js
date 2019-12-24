import React from 'react'
import { Wrapper } from './style'
import Loader from '@atoms/Loader'

const ContentLoader = () => (
  <Wrapper>
    <Loader margin="10px" size={30} sizeUnit="px" />
  </Wrapper>
)

export default ContentLoader
