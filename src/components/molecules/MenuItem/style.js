import { font, palette } from 'styled-theme'
import styled from 'styled-components'
import { getCubicBezier, getSize } from '@theme'

export const Wrapper = styled.li`
  align-items: center;
  display: flex;
  overflow: hidden;
  transition: .3s background-color ${getCubicBezier()};

  &:hover {
    background-color: rgba(219, 227, 244, 0.30);
  }

  > a {
    color: ${palette('grayscale', 4)};
    font-family: ${font('primary')};
    font-size: ${getSize('small')};
    padding: .8em;
    text-decoration: none;
    transition: .3s transform ${getCubicBezier()};
    width: 100%;
  }

  > a:hover {
    transform: translateX(10px);
  }
`
