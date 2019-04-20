import React from 'react'
import { storiesOf } from '@storybook/react'
import Caption from '.'

storiesOf('Caption', module)
  .add('default', () => (
    <table>
      <Caption>Hello</Caption>
    </table>
  ))
  .add('colors', () => (
    <table>
      <Caption
        backgroundColor={{ type: 'secondary', position: 0 }}
        color={{ type: 'grayscale', position: 4 }}
      >
        Hello
      </Caption>
    </table>
  ))
