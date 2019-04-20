import React from 'react'
import { storiesOf } from '@storybook/react'
import Block from '.'

storiesOf('Block', module)
  .add('default', () => (
    <React.Fragment>
      <Block>Officia aliqua reprehenderit fugiat occaecat quis non eiusmod.</Block>
    </React.Fragment>
  ))
  .add('background color', () => (
    <Block backgroundColor={{ type: 'secondary', position: 0 }}>
      Officia aliqua reprehenderit fugiat occaecat quis non eiusmod.
    </Block>
  ))
