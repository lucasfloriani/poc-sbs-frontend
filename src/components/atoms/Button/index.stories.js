import React from 'react'
import { storiesOf } from '@storybook/react'
import Button from '.'

const style = { marginRight: '25px' }

storiesOf('Button', module)
  .add('default', () => (
    <Button>Button</Button>
  ))
  .add('shadow', () => (
    <React.Fragment>
      <Button shadow="extraSmall" style={style}>Extra Small</Button>
      <Button shadow="small" style={style}>Small</Button>
      <Button shadow="medium" style={style}>Medium</Button>
      <Button shadow="large" style={style}>Large</Button>
      <Button shadow="extraLarge">Extra Large</Button>
    </React.Fragment>
  ))
  .add('colors', () => (
    <React.Fragment>
      <Button
        style={style}
        color={{ type: 'grayscale', position: 4 }}
        hoverColor={{ type: 'grayscale', position: 4 }}
        backgroundColor={{ type: 'primary', position: 0 }}
        hoverBackgroundColor={{ type: 'primary', position: 1 }}
      >
        Primary
      </Button>
      <Button
        style={style}
        color={{ type: 'grayscale', position: 4 }}
        hoverColor={{ type: 'grayscale', position: 4 }}
        backgroundColor={{ type: 'secondary', position: 0 }}
        hoverBackgroundColor={{ type: 'secondary', position: 1 }}
      >
        Secondary
      </Button>
      <Button
        style={style}
        color={{ type: 'grayscale', position: 4 }}
        hoverColor={{ type: 'grayscale', position: 4 }}
        backgroundColor={{ type: 'danger', position: 0 }}
        hoverBackgroundColor={{ type: 'danger', position: 1 }}
      >
        Danger
      </Button>
      <Button
        style={style}
        color={{ type: 'grayscale', position: 4 }}
        hoverColor={{ type: 'grayscale', position: 4 }}
        backgroundColor={{ type: 'alert', position: 0 }}
        hoverBackgroundColor={{ type: 'alert', position: 1 }}
      >
        Alert
      </Button>
      <Button
        color={{ type: 'grayscale', position: 4 }}
        hoverColor={{ type: 'grayscale', position: 4 }}
        backgroundColor={{ type: 'success', position: 0 }}
        hoverBackgroundColor={{ type: 'success', position: 1 }}
      >
        Success
      </Button>
    </React.Fragment>
  ))
  .add('disabled', () => (
    <Button disabled>Hello</Button>
  ))
  .add('link', () => (
    <Button href="https://google.com" target="_blank">Google</Button>
  ))
