import React from 'react'
import styled from 'styled-components'
import { media } from '@theme'
import { Grid } from 'components'

export const HeaderWrapper = styled(({ ...props }) => <Grid column="1fr auto" valign="center" {...props} />)`
  ${media.lessThan('extraSmall')`
    grid-template-columns: 1fr;
  `}
`
