import styled from 'styled-components'
import { palette } from 'styled-theme'
import historyType from '@enums/historyType'
import { Card } from 'components'

export const StyledCard = styled(Card)`
  background-color: ${({ type }) => {
    if (type === historyType.create) return palette('primary', 4)
    if (type === historyType.update) return palette('alert', 2)
    return palette('error', 3)
  }};
`
