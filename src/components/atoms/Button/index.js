import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import Link from 'react-router-dom/Link'
import { ifProp } from 'styled-tools'
import { font, palette } from 'styled-theme'
import {
  getCubicBezier,
  getFontWeight,
  getSize,
  getOptionsFrom,
  getShadow,
} from '@theme'

const backgroundColor = ({ backgroundColor: { position, type }, disabled }) => {
  return disabled ? palette('grayscale', 3) : palette(type, position)
}

const foregroundColor = ({ color: { position, type }, disabled }) => {
  return disabled ? palette('grayscale', 2) : palette(type, position)
}

const hoverBackgroundColor = ({ hoverBackgroundColor: { position, type }, disabled }) => {
  return disabled ? palette('grayscale', 3) : palette(type, position)
}

const hoverForegroundColor = ({ hoverColor: { position = 0, type = 'grayscale' }, disabled }) => {
  return disabled ? palette('grayscale', 2) : palette(type, position)
}

const styles = css`
  align-items: center;
  background-color: ${backgroundColor};
  border: none;
  border-radius: 10px;
  box-shadow: ${({ shadow }) => getShadow(shadow)};
  box-sizing: border-box;
  color: ${foregroundColor};
  cursor: ${ifProp('disabled', 'default', 'pointer')};
  display: inline-flex;
  ${({ grow }) => grow && css`flex-grow: ${grow};`}
  font-family: ${font('primary')};
  font-size: ${({ fontSize }) => getSize(fontSize)};
  font-weight: ${getFontWeight('medium')};
  justify-content: center;
  padding: .6em 1.2em;
  text-decoration: none;
  transition: background-color .3s ${getCubicBezier()}, color .3s ${getCubicBezier()};
  white-space: nowrap;

  &:hover,
  &:focus,
  &:active {
    background-color: ${hoverBackgroundColor};
    color: ${hoverForegroundColor};
  }

  &:focus {
    outline: none
  }
`

const Anchor = styled(({
  backgroundColor, children, color, fontSize, hoverBackgroundColor, hoverColor, shadow, ...props
}) => <a {...props}>{children}</a>)`${styles}`

/* eslint-disable react/button-has-type */
const StyledButton = styled(({
  backgroundColor, children, color, fontSize, hoverBackgroundColor, hoverColor, shadow, ...props
}) => <button {...props}>{children}</button>)`${styles}`
/* eslint-enable react/button-has-type */

const StyledLink = styled(({
  backgroundColor, color, fontSize, hoverBackgroundColor, hoverColor, shadow, ...props
}) => <Link {...props} />)`${styles}`

const Button = ({ ...props }) => {
  const { to, href } = props
  if (to) return <StyledLink {...props} />
  if (href) return <Anchor {...props} />
  return <StyledButton {...props} />
}

Button.propTypes = {
  backgroundColor: PropTypes.shape({
    position: PropTypes.number,
    type: PropTypes.oneOf(getOptionsFrom('palette')),
  }),
  color: PropTypes.shape({
    position: PropTypes.number,
    type: PropTypes.oneOf(getOptionsFrom('palette')),
  }),
  disabled: PropTypes.bool,
  fontSize: PropTypes.oneOf(getOptionsFrom('sizes')),
  grow: PropTypes.number,
  hoverBackgroundColor: PropTypes.shape({
    position: PropTypes.number,
    type: PropTypes.oneOf(getOptionsFrom('palette')),
  }),
  hoverColor: PropTypes.shape({
    position: PropTypes.number,
    type: PropTypes.oneOf(getOptionsFrom('palette')),
  }),
  href: PropTypes.string,
  shadow: PropTypes.oneOf(getOptionsFrom('shadows')),
  to: PropTypes.string,
}

Button.defaultProps = {
  backgroundColor: { type: 'primary', position: 1 },
  color: { type: 'grayscale', position: 4 },
  hoverBackgroundColor: { type: 'primary', position: 0 },
  hoverColor: { type: 'grayscale', position: 4 },
  type: 'button',
}

export default Button
