import React from 'react'
import { storiesOf } from '@storybook/react'
import { Table, TableCell, TableRow } from 'components'

storiesOf('Table', module)
  .add('default', () => (
    <Table>
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
    </Table>
  ))
  .add('default with all params', () => (
    <Table
      caption="Hello"
      head={(
        <TableRow>
          <TableCell heading>Heading 1</TableCell>
          <TableCell heading>Heading 2</TableCell>
          <TableCell heading>Heading 3</TableCell>
        </TableRow>
      )}
      foot={(
        <TableRow>
          <TableCell>Footer 1</TableCell>
          <TableCell>Footer 2</TableCell>
          <TableCell>Footer 3</TableCell>
        </TableRow>
      )}
    >
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
    </Table>
  ))
  .add('with head', () => (
    <Table
      head={(
        <TableRow>
          <TableCell heading>Heading 1</TableCell>
          <TableCell heading>Heading 2</TableCell>
          <TableCell heading>Heading 3</TableCell>
        </TableRow>
      )}
    >
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
    </Table>
  ))
  .add('with foot', () => (
    <Table
      foot={(
        <TableRow>
          <TableCell>Footer 1</TableCell>
          <TableCell>Footer 2</TableCell>
          <TableCell>Footer 3</TableCell>
        </TableRow>
      )}
    >
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
    </Table>
  ))
  .add('with caption', () => (
    <Table caption="Hello">
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
    </Table>
  ))
