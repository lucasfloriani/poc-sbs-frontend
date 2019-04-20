import React from 'react'
import { storiesOf } from '@storybook/react'
import image from './__test__/test.png'
import Image from '.'

const style = { marginRight: '20px' }

storiesOf('Image', module)
  .add('default', () => (
    <React.Fragment>
      <Image alt="Test Image" src={image} />
    </React.Fragment>
  ))
  .add('height', () => (
    <React.Fragment>
      <Image height="25px" alt="Test Image" src={image} style={style} />
      <Image height="50px" alt="Test Image" src={image} style={style} />
      <Image height="100px" alt="Test Image" src={image} />
    </React.Fragment>
  ))
  .add('width', () => (
    <React.Fragment>
      <Image width="25px" alt="Test Image" src={image} style={style} />
      <Image width="50px" alt="Test Image" src={image} style={style} />
      <Image width="100px" alt="Test Image" src={image} />
    </React.Fragment>
  ))
  .add('maxHeight', () => (
    <React.Fragment>
      <Image height="25px" maxHeight="20px" alt="Test Image" src={image} style={style} />
      <Image height="50px" maxHeight="45px" alt="Test Image" src={image} style={style} />
      <Image height="100px" maxHeight="90px" alt="Test Image" src={image} />
    </React.Fragment>
  ))
  .add('maxWidth', () => (
    <React.Fragment>
      <Image width="25px" maxWidth="20px" alt="Test Image" src={image} style={style} />
      <Image width="50px" maxWidth="45px" alt="Test Image" src={image} style={style} />
      <Image width="100px" maxWidth="90px" alt="Test Image" src={image} />
    </React.Fragment>
  ))
  .add('zoom', () => (
    <React.Fragment>
      <Image zoom={1.1} alt="Test Image" src={image} style={style} />
      <Image zoom={1.5} alt="Test Image" src={image} style={style} />
      <Image zoom={2} alt="Test Image" src={image} />
    </React.Fragment>
  ))
  .add('lazyLoad', () => (
    <Image lazyLoad alt="Test Image" src={image} />
  ))
