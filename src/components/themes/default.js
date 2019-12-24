import { createGlobalStyle } from 'styled-components'
import { generateMedia } from 'styled-media-query'

export const theme = {
  cubicBezier: {
    accelerate: 'cubic-bezier(0.4, 0.0, 1, 1)',
    decelerate: 'cubic-bezier(0.0, 0.0, 0.2, 1)',
    standard: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
  },
  palette: {
    primary: ['#193336', '#57737C', '#6E9496', '#5C7B85', '#EAEDE6'],
    error: ['#d32f2f', '#f44336', '#f18f8f', '#ffcdd2'],
    alert: ['#ffa000', '#ffc107', '#ffd761', '#ffecb3'],
    success: ['#388e3c', '#4caf50', '#7cc47f', '#c8e6c9'],
    grayscale: ['#000000', '#333333', '#666666', '#bfbebe', '#fff', 'transparent'],
  },
  fonts: {
    primary: 'Montserrat, sans-serif',
  },
  shadows: {
    extraSmall: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    small: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
    medium: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
    large: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
    extraLarge: '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)',
  },
  sizes: {
    extraLarge: '1.8em',
    large: '1.6em',
    medium: '1.4em',
    normal: '1.2em',
    small: '1em',
    extraSmall: '.8em',
  },
  fontWeight: {
    light: 300,
    regular: 400,
    medium: 500,
    semiBold: 600,
  },
  padding: {
    primary: '1.8em',
    secondary: '1.2em',
  },
  medias: generateMedia({
    huge: '1440px',
    large: '1200px',
    medium: '992px',
    small: '768px',
    extraSmall: '576px',
  }),
}

export const getOptionsFrom = option => Object.keys(theme[option])
export const getSize = (name = 'normal') => theme.sizes[name] ? theme.sizes[name] : theme.sizes.small
export const getFontWeight = (name = 'regular') => {
  return theme.fontWeight[name] ? theme.fontWeight[name] : theme.fontWeight.regular
}
export const getShadow = (size = 'extraSmall') => theme.shadows[size]
export const getPadding = (type = 'secondary') => theme.padding[type]
export const getMediaQuery = (size = 'maxMedium') => theme.medias[size]
export const getCubicBezier = (type = 'standard') => theme.cubicBezier[type]
export const media = theme.medias

export const GlobalStyles = createGlobalStyle`
  body {
    background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
    margin: 0;
  }
  a[disabled] {
    pointer-events: none;
  }
`
