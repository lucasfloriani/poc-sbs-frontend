import React from 'react'
import { storiesOf } from '@storybook/react'
import Heading from '.'

const style = { marginBottom: '25px' }

storiesOf('Heading', module)
  .add('default', () => (
    <Heading>Default</Heading>
  ))
  .add('color', () => (
    <React.Fragment>
      <Heading
        style={style}
        color={{ type: 'secondary', position: 0 }}
        hoverColor={{ type: 'primary', position: 0 }}
      >
        Color 1
      </Heading>
      <Heading
        style={style}
        color={{ type: 'primary', position: 0 }}
        hoverColor={{ type: 'secondary', position: 0 }}
      >
        Color 2
      </Heading>
    </React.Fragment>
  ))
  .add('font weight', () => (
    <React.Fragment>
      <Heading style={style} fontWeight="light">Light</Heading>
      <Heading style={style} fontWeight="regular">Regular</Heading>
    </React.Fragment>
  ))
  .add('levels with default size', () => (
    <React.Fragment>
      <Heading style={style} level={1}>Heading Level 1</Heading>
      <Heading style={style} level={2}>Heading Level 2</Heading>
      <Heading style={style} level={3}>Heading Level 3</Heading>
      <Heading style={style} level={4}>Heading Level 4</Heading>
      <Heading style={style} level={5}>Heading Level 5</Heading>
      <Heading style={style} level={6}>Heading Level 6</Heading>
    </React.Fragment>
  ))
  .add('sizes', () => (
    <React.Fragment>
      <Heading style={style} fontSize="extraLarge" level={1}>Heading Level 1</Heading>
      <Heading style={style} fontSize="large" level={2}>Heading Level 2</Heading>
      <Heading style={style} fontSize="medium" level={3}>Heading Level 3</Heading>
      <Heading style={style} fontSize="normal" level={4}>Heading Level 4</Heading>
      <Heading style={style} fontSize="small" level={5}>Heading Level 5</Heading>
      <Heading style={style} fontSize="extraSmall" level={6}>Heading Level 6</Heading>
    </React.Fragment>
  ))
