import React from 'react'
import styled from 'styled-components'
import { media } from '@theme'
import Grid from '@atoms/Grid'

export const CardWrapper = styled(({ length, ...props }) => <Grid column="1fr auto" valign="flex-start" {...props} />)`
  ${media.lessThan('extraSmall')`
    grid-template-columns: 1fr;
  `}
`
