import React from 'react'
import styled from 'styled-components'
import { Loader } from 'components'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`

const ContentLoader = () => (
  <Wrapper>
    <Loader margin="10px" size={30} sizeUnit="px" />
  </Wrapper>
)

export default ContentLoader
