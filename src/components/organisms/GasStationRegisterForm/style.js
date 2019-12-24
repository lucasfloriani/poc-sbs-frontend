import React from 'react'
import styled from 'styled-components'
import { media } from '@theme'
import Grid from '@atoms/Grid'

export const FieldWapper = styled(({ ...props }) => <Grid column="1fr 1fr 1fr" valign="flex-start" {...props} />)`
  ${media.lessThan('small')`
    grid-template-columns: 1fr;
  `}
`
