import React from 'react'
import styled from 'styled-components'
import { media } from '@theme'
import { Grid } from 'components'

export const FieldWrapper = styled(({ ...props }) => <Grid column="1fr 1fr 1fr" {...props} />)`
  ${media.lessThan('extraSmall')`
    grid-template-columns: 1fr;
  `}
`