import React from 'react'
import { storiesOf } from '@storybook/react'
import Input from '.'

const styles = { margin: '30px' }

storiesOf('Text', module)
  .add('default', () => (
    <div style={styles}>
      <Input />
    </div>
  ))
  .add('invalid', () => (
    <div style={styles}>
      <Input invalid />
    </div>
  ))
