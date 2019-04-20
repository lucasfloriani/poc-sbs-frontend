import React from 'react'
import { storiesOf } from '@storybook/react'
import Paragraph from '.'

const style = { paddingBottom: '3em' }

storiesOf('Paragraph', module)
  .add('default', () => (
    <React.Fragment>
      <Paragraph>
        Nisi eu eiusmod cupidatat aute laboris commodo excepteur
        esse dolore incididunt incididunt aliquip pariatur est
        minim officia sit. Nulla pariatur duis duis quis commodo
        cupidatat voluptate enim culpa elit adipisicing do
        cupidatat sint anim. Cillum elit magna occaecat proident
        sit cupidatat ad quis sunt id culpa culpa. Ad duis nulla
        in incididunt amet consequat officia ad voluptate
        voluptate. Pariatur eiusmod ullamco cupidatat non magna
        officia aute magna deserunt qui aute dolor eu. Qui amet
        non ex cillum sunt ad velit consequat ipsum velit.
      </Paragraph>
    </React.Fragment>
  ))
  .add('colors', () => (
    <React.Fragment>
      <Paragraph style={style} color={{ type: 'primary', position: 0 }}>
        Nisi eu eiusmod cupidatat aute laboris commodo excepteur
        esse dolore incididunt incididunt aliquip pariatur est
        minim officia sit. Nulla pariatur duis duis quis commodo
        cupidatat voluptate enim culpa elit adipisicing do
        cupidatat sint anim.
      </Paragraph>
      <Paragraph style={style} color={{ type: 'secondary', position: 0 }}>
        Nisi eu eiusmod cupidatat aute laboris commodo excepteur
        esse dolore incididunt incididunt aliquip pariatur est
        minim officia sit. Nulla pariatur duis duis quis commodo
        cupidatat voluptate enim culpa elit adipisicing do
        cupidatat sint anim.
      </Paragraph>
      <Paragraph style={style} color={{ type: 'alert', position: 0 }}>
        Nisi eu eiusmod cupidatat aute laboris commodo excepteur
        esse dolore incididunt incididunt aliquip pariatur est
        minim officia sit. Nulla pariatur duis duis quis commodo
        cupidatat voluptate enim culpa elit adipisicing do
        cupidatat sint anim.
      </Paragraph>
    </React.Fragment>
  ))
  .add('sizes', () => (
    <React.Fragment>
      <Paragraph style={style} fontSize="extraLarge">
        Nisi eu eiusmod cupidatat aute laboris commodo excepteur
        esse dolore incididunt incididunt aliquip pariatur est
        minim officia sit. Nulla pariatur duis duis quis commodo
        cupidatat voluptate enim culpa elit adipisicing do
        cupidatat sint anim.
      </Paragraph>
      <Paragraph style={style} fontSize="large">
        Nisi eu eiusmod cupidatat aute laboris commodo excepteur
        esse dolore incididunt incididunt aliquip pariatur est
        minim officia sit. Nulla pariatur duis duis quis commodo
        cupidatat voluptate enim culpa elit adipisicing do
        cupidatat sint anim.
      </Paragraph>
      <Paragraph style={style} fontSize="medium">
        Nisi eu eiusmod cupidatat aute laboris commodo excepteur
        esse dolore incididunt incididunt aliquip pariatur est
        minim officia sit. Nulla pariatur duis duis quis commodo
        cupidatat voluptate enim culpa elit adipisicing do
        cupidatat sint anim.
      </Paragraph>
      <Paragraph style={style} fontSize="normal">
        Nisi eu eiusmod cupidatat aute laboris commodo excepteur
        esse dolore incididunt incididunt aliquip pariatur est
        minim officia sit. Nulla pariatur duis duis quis commodo
        cupidatat voluptate enim culpa elit adipisicing do
        cupidatat sint anim.
      </Paragraph>
      <Paragraph style={style} fontSize="small">
        Nisi eu eiusmod cupidatat aute laboris commodo excepteur
        esse dolore incididunt incididunt aliquip pariatur est
        minim officia sit. Nulla pariatur duis duis quis commodo
        cupidatat voluptate enim culpa elit adipisicing do
        cupidatat sint anim.
      </Paragraph>
      <Paragraph style={style} fontSize="extraSmall">
        Nisi eu eiusmod cupidatat aute laboris commodo excepteur
        esse dolore incididunt incididunt aliquip pariatur est
        minim officia sit. Nulla pariatur duis duis quis commodo
        cupidatat voluptate enim culpa elit adipisicing do
        cupidatat sint anim.
      </Paragraph>
    </React.Fragment>
  ))
