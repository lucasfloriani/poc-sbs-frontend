import React from 'react'
import { storiesOf } from '@storybook/react'
import Paginate from '.'

storiesOf('Paginate', module)
  .add('default', () => (
    <Paginate
      totalItems={150}
      currentPage={7}
      pageSize={15}
      maxPages={5}
      onChange={() => console.log('Clicou')}
      to="test"
    />
  ))
