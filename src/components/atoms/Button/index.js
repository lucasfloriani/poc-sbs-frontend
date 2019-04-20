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

const backgroundColor = ({ backgroundColor, disabled }) => {
  return disabled ? palette('grayscale', 3) : palette(backgroundColor.type, backgroundColor.position)
}

const foregroundColor = ({ color, disabled }) => {
  return disabled ? palette('grayscale', 2) : palette(color.type, color.position)
}

const hoverBackgroundColor = ({ hoverBackgroundColor, disabled }) => {
  return disabled ? palette('grayscale', 3) : palette(hoverBackgroundColor.type, hoverBackgroundColor.position)
}

const hoverForegroundColor = ({ hoverColor = { type: 'grayscale', position: 0 }, disabled }) => {
  return disabled ? palette('grayscale', 2) : palette(hoverColor.type, hoverColor.position)
}

const styles = css`
  align-items: center;
  background-color: ${backgroundColor};
  border: none;
  border-radius: 2px;
  box-sizing: border-box;
  box-shadow: ${({ shadow }) => getShadow(shadow)};
  color: ${foregroundColor};
  cursor: ${ifProp('disabled', 'default', 'pointer')};
  display: inline-flex;
  ${({ grow }) => grow && css`flex-grow: ${grow};`}
  font-family: ${font('primary')};
  font-size: ${({ fontSize }) => getSize(fontSize)};
  font-weight: ${getFontWeight('medium')};
  justify-content: center;
  padding: .6em 1.2em;
  transition: background-color .3s ${getCubicBezier()}, color .3s ${getCubicBezier()};
  text-decoration: none;
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

const StyledLink = styled(({
  backgroundColor, color, fontSize, hoverBackgroundColor, hoverColor, shadow, ...props
}) => <Link {...props} />)`${styles}`

const Anchor = styled(({
  backgroundColor, children, color, fontSize, hoverBackgroundColor, hoverColor, shadow, ...props
}) => <a {...props}>{children}</a>)`${styles}`

/* eslint-disable react/button-has-type */
const StyledButton = styled(({
  backgroundColor, children, color, fontSize, hoverBackgroundColor, hoverColor, shadow, ...props
}) => <button {...props}>{children}</button>)`${styles}`
/* eslint-enable react/button-has-type */

const Button = ({ ...props }) => {
  const { to, href } = props
  if (to) return <StyledLink {...props} />
  if (href) return <Anchor {...props} />
  return <StyledButton {...props} />
}

Button.propTypes = {
  color: PropTypes.shape({
    type: PropTypes.oneOf(getOptionsFrom('palette')),
    position: PropTypes.number,
  }),
  backgroundColor: PropTypes.shape({
    type: PropTypes.oneOf(getOptionsFrom('palette')),
    position: PropTypes.number,
  }),
  disabled: PropTypes.bool,
  fontSize: PropTypes.oneOf(getOptionsFrom('sizes')),
  grow: PropTypes.number,
  href: PropTypes.string,
  hoverColor: PropTypes.shape({
    type: PropTypes.oneOf(getOptionsFrom('palette')),
    position: PropTypes.number,
  }),
  hoverBackgroundColor: PropTypes.shape({
    type: PropTypes.oneOf(getOptionsFrom('palette')),
    position: PropTypes.number,
  }),
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
