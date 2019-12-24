import React from 'react'
import styled from 'styled-components'
import { media } from '@theme'
import Grid from '@atoms/Grid'

export const ListWrapper = styled(({ length, ...props }) => <Grid column={length ? '1fr 1fr' : '1fr'} {...props} />)`
  ${media.lessThan('medium')`
    grid-template-columns: 1fr;
  `}
`
