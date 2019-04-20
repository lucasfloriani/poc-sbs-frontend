import React from 'react'
import { storiesOf } from '@storybook/react'
import Checkbox from '.'

const styles = { padding: '30px' }

storiesOf('Radio', module)
  .add('default', () => (
    <div style={styles}>
      <Checkbox name="teste" />
    </div>
  ))
  .add('with text', () => (
    <div style={styles}>
      <Checkbox name="teste">Aceito os termos de contrato</Checkbox>
    </div>
  ))
  .add('checkbox sizes', () => (
    <React.Fragment>
      <div style={styles}>
        <Checkbox size="large" name="teste-3">Large size</Checkbox>
      </div>
      <div style={styles}>
        <Checkbox size="medium" name="teste-2">Medium size</Checkbox>
      </div>
      <div style={styles}>
        <Checkbox size="small" name="teste-1">Small size</Checkbox>
      </div>
    </React.Fragment>
  ))
  .add('colors', () => (
    <React.Fragment>
      <div style={styles}>
        <Checkbox
          backgroundColor={{ type: 'primary', position: 0 }}
          checkedBackgroundColor={{ type: 'secondary', position: 0 }}
          name="teste-1"
        />
      </div>
      <div style={styles}>
        <Checkbox
          backgroundColor={{ type: 'secondary', position: 0 }}
          checkedBackgroundColor={{ type: 'primary', position: 0 }}
          name="teste-2"
        >
          With Text
        </Checkbox>
      </div>
      <div style={styles}>
        <Checkbox
          backgroundColor={{ type: 'alert', position: 0 }}
          checkedBackgroundColor={{ type: 'success', position: 0 }}
          name="teste-3"
          size="large"
        >
          Large size
        </Checkbox>
      </div>
      <div style={styles}>
        <Checkbox
          backgroundColor={{ type: 'danger', position: 2 }}
          checkedBackgroundColor={{ type: 'grayscale', position: 3 }}
          name="teste-4"
          size="medium"
        >
          Medium size
        </Checkbox>
      </div>
      <div style={styles}>
        <Checkbox
          backgroundColor={{ type: 'alert', position: 3 }}
          checkedBackgroundColor={{ type: 'secondary', position: 0 }}
          name="teste-5"
          size="small"
        >
          Small size
        </Checkbox>
      </div>
    </React.Fragment>
  ))
  .add('disabled', () => (
    <React.Fragment>
      <div style={styles}>
        <Checkbox name="teste-1" disabled />
      </div>
      <div style={styles}>
        <Checkbox name="teste-2" disabled>With Text</Checkbox>
      </div>
      <div style={styles}>
        <Checkbox size="large" name="teste-3" disabled>Large size</Checkbox>
      </div>
      <div style={styles}>
        <Checkbox size="medium" name="teste-4" disabled>Medium size</Checkbox>
      </div>
      <div style={styles}>
        <Checkbox size="small" name="teste-5" disabled>Small size</Checkbox>
      </div>
    </React.Fragment>
  ))
  .add('disabled colors', () => (
    <React.Fragment>
      <div style={styles}>
        <Checkbox
          disabled
          disabledColor={{ type: 'alert', position: 0 }}
          name="teste-1"
        />
      </div>
      <div style={styles}>
        <Checkbox
          disabled
          disabledColor={{ type: 'danger', position: 2 }}
          name="teste-2"
        >
          With Text
        </Checkbox>
      </div>
      <div style={styles}>
        <Checkbox
          disabled
          disabledColor={{ type: 'alert', position: 3 }}
          name="teste-3"
          size="large"
        >
          Large size
        </Checkbox>
      </div>
    </React.Fragment>
  ))
  .add('invalid', () => (
    <React.Fragment>
      <div style={styles}>
        <Checkbox size="large" name="teste-3" invalid>Large size</Checkbox>
      </div>
      <div style={styles}>
        <Checkbox size="medium" name="teste-2" invalid>Medium size</Checkbox>
      </div>
      <div style={styles}>
        <Checkbox size="small" name="teste-1" invalid>Small size</Checkbox>
      </div>
    </React.Fragment>
  ))
