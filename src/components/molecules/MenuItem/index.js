import React from 'react'
import PropTypes from 'prop-types'
import { font, palette } from 'styled-theme'
import styled from 'styled-components'
import Link from 'react-router-dom/Link'
import { getCubicBezier, getSize } from '@theme'

const Wrapper = styled.li`
  align-items: center;
  display: flex;

  > a {
    color: ${palette('grayscale', 4)};
    font-family: ${font('primary')};
    font-size: ${getSize('small')};
    overflow: hidden;
    padding: 8px;
    position: relative;
    text-decoration: none;
    transition: .3s transform ${getCubicBezier()}, .3s background-image ${getCubicBezier()};
    width: 100%;
  }

  > a:hover {
    transform: translateX(10px);
  }

  > a::before {
    background-color: rgba(219, 227, 244, 0.30);
    content: "";
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    transform: translateX(-100%);
    transition: .3s transform ${getCubicBezier()};
    width: 100%;
    z-index: 10;
  }

  > a:hover::before {
    transform: translateX(0);
  }
`

const MenuItem = ({ children, icon, ...props }) => {
  return (
    <Wrapper>
      {icon && icon}
      <Link {...props}>{children}</Link>
    </Wrapper>
  )
}

MenuItem.propTypes = {
  icon: PropTypes.node,
}

export default MenuItem
