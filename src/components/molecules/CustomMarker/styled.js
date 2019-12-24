import styled from 'styled-components'
import Card from '@atoms/Card'
import Heading from '@atoms/Heading'

export const Marker = styled(Card)`
  overflow: visible;
  padding: 6px;
  position: relative;

  &:after {
    border-color: transparent transparent #ffffff #ffffff;
    border-style: solid;
    border-width: 8px;
    bottom: -8px;
    box-shadow: -3px 3px 3px 0 rgba(0, 0, 0, 0.2);
    content: '';
    display: block;
    height: 0;
    left: 50%;
    position: absolute;
    transform: translateX(-50%) rotate(-45deg);
    width: 0;
  }
`

export const FuelCardInfo = styled(Card)`
  padding: 0.3em;
`

export const Title = styled(Heading)`
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  display: block;
  display: -webkit-box;
  font-size: 1em;
  overflow: hidden;
  text-overflow: ellipsis;
`
