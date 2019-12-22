import styled from 'styled-components'
import { getShadow, media } from '@theme'
import { Block, Flex } from 'components'

export const Wrapper = styled(Block)`
  box-shadow: ${getShadow('small')};
  display: flex;
  justify-content: center;

  ${media.lessThan('small')`
    padding: 0.5rem;
  `}
`

export const InnerWrapper = styled(Flex)`
  max-width: 1200px;

  ${media.lessThan('extraSmall')`
    flex-direction: column;
  `}
`

export const FuelTypeContainer = styled(Flex)`
  margin-top: 10px;
  width: auto;

  ${media.lessThan('extraSmall')`
    margin-top: 20px;
  `}
`