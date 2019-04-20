import React from 'react'
import { storiesOf } from '@storybook/react'
import Icon from '.'

const style = { marginRight: '20px' }

storiesOf('Icon', module)
  .add('default', () => (
    <React.Fragment>
      <Icon icon="clear" style={style} />
      <Icon icon="delete" style={style} />
      <Icon icon="filter" style={style} />
      <Icon icon="logout" style={style} />
      <Icon icon="menu" style={style} />
      <Icon icon="user" />
    </React.Fragment>
  ))
  .add('colors', () => (
    <React.Fragment>
      <Icon icon="clear" color={{ type: 'primary', position: 0 }} style={style} />
      <Icon icon="delete" color={{ type: 'secondary', position: 0 }} style={style} />
      <Icon icon="filter" color={{ type: 'danger', position: 0 }} style={style} />
      <Icon icon="logout" color={{ type: 'alert', position: 0 }} style={style} />
      <Icon icon="menu" color={{ type: 'success', position: 0 }} style={style} />
      <Icon icon="user" color={{ type: 'grayscale', position: 0 }} />
    </React.Fragment>
  ))
  .add('hover color', () => (
    <React.Fragment>
      <Icon icon="clear" hoverColor={{ type: 'primary', position: 2 }} style={style} />
      <Icon icon="delete" hoverColor={{ type: 'secondary', position: 0 }} style={style} />
      <Icon icon="filter" hoverColor={{ type: 'danger', position: 0 }} style={style} />
      <Icon icon="logout" hoverColor={{ type: 'alert', position: 0 }} style={style} />
      <Icon icon="menu" hoverColor={{ type: 'success', position: 0 }} style={style} />
      <Icon icon="user" hoverColor={{ type: 'grayscale', position: 1 }} />
    </React.Fragment>
  ))
  .add('sizes', () => (
    <React.Fragment>
      <Icon icon="clear" size="extraSmall" title="extraSmall" style={style} />
      <Icon icon="delete" size="small" title="small" style={style} />
      <Icon icon="filter" size="normal" title="normal" style={style} />
      <Icon icon="logout" size="medium" title="medium" style={style} />
      <Icon icon="menu" size="large" title="large" style={style} />
      <Icon icon="user" size="extraLarge" title="extraLarge" />
    </React.Fragment>
  ))
