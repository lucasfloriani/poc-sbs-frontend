import React from 'react'
import { storiesOf } from '@storybook/react'
import image from './__test__/test.png'
import ImageLink from '.'

storiesOf('ImageLink', module)
  .add('default', () => (
    <React.Fragment>
      <ImageLink alt="Test Image" target="_blank" href="https://google.com" src={image} />
    </React.Fragment>
  ))
  .add('link', () => (
    <React.Fragment>
      <ImageLink alt="Test Image" to="/" src={image} />
    </React.Fragment>
  ))
