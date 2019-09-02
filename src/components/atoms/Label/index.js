import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { font, palette } from 'styled-theme'
import { getCubicBezier, getOptionsFrom, getSize } from '@theme'

const Label = styled(({
  active, color, focusBorderColor, htmlFor, ...props
}) => <label htmlFor={htmlFor} {...props} />)`
  background-color: ${palette('grayscale', 4)};
  border-radius: 3px;
  color: ${({ active, color, focusBorderColor: { position, type } }) => active ? palette(type, position) : palette(color.type, color.position)};
  font-family: ${font('primary')};
  font-size: ${({ active }) => active ? '0.6em' : getSize('extraSmall')};
  left: 0;
  padding: 4px;
  position: absolute;
  top: ${({ active }) => active ? '0' : '50%'};
  transform: ${({ active }) => active ? 'translate(5px,-50%)' : 'translate(10px, -50%)'};
  transition: .3s color ${getCubicBezier()},
              .3s font-size ${getCubicBezier()},
              .3s transform ${getCubicBezier()},
              .3s top ${getCubicBezier()};

  ${({ required }) => required && css`
    &::after {
      color: ${palette('danger', 0)};
      content: '*';
      margin-left: 2px;
    }
  `}
`

Label.propTypes = {
  active: PropTypes.bool,
  color: PropTypes.shape({
    position: PropTypes.number,
    type: PropTypes.oneOf(getOptionsFrom('palette')),
  }),
  focusBorderColor: PropTypes.shape({
    position: PropTypes.number,
    type: PropTypes.oneOf(getOptionsFrom('palette')),
  }),
}

Label.defaultProps = {
  color: { position: 1, type: 'grayscale' },
  focusBorderColor: { position: 0, type: 'primary' },
}

export default Label
