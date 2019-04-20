import React from 'react'
import { storiesOf } from '@storybook/react'
import { TableCell } from 'components'
import TableRow from '.'

const styles = { borderCollapse: 'collapse' }

storiesOf('TableRow', module)
  .add('default', () => (
    <table cellPadding={0} cellSpacing={0} style={styles}>
      <thead>
        <TableRow>
          <TableCell heading>Heading Cell 1</TableCell>
          <TableCell heading>Heading Cell 2</TableCell>
          <TableCell heading>Heading Cell 3</TableCell>
        </TableRow>
      </thead>
      <tbody>
        <TableRow>
          <TableCell>Cell 1</TableCell>
          <TableCell>Cell 2</TableCell>
          <TableCell>Cell 3</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Cell 1</TableCell>
          <TableCell>Cell 2</TableCell>
          <TableCell>Cell 3</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Cell 1</TableCell>
          <TableCell>Cell 2</TableCell>
          <TableCell>Cell 3</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Cell 1</TableCell>
          <TableCell>Cell 2</TableCell>
          <TableCell>Cell 3</TableCell>
        </TableRow>
      </tbody>
    </table>
  ))
