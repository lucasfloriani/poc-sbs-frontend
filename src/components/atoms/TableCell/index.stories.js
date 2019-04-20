import React from 'react'
import { storiesOf } from '@storybook/react'
import TableCell from '.'

storiesOf('TableCell', module)
  .add('default', () => (
    <table cellPadding={0} cellSpacing={0}>
      <thead>
        <tr>
          <TableCell heading>Heading Cell 1</TableCell>
          <TableCell heading>Heading Cell 2</TableCell>
          <TableCell heading>Heading Cell 3</TableCell>
        </tr>
      </thead>
      <tbody>
        <tr>
          <TableCell>Cell 1</TableCell>
          <TableCell>Cell 2</TableCell>
          <TableCell>Cell 3</TableCell>
        </tr>
      </tbody>
    </table>
  ))
  .add('colors', () => (
    <table cellPadding={0} cellSpacing={0}>
      <thead>
        <tr>
          <TableCell
            heading
            backgroundColor={{ type: 'primary', position: 1 }}
            color={{ type: 'grayscale', position: 4 }}
            hoverBackgroundColor={{ type: 'primary', position: 2 }}
            hoverColor={{ type: 'grayscale', position: 4 }}
          >
            Heading Cell 1
          </TableCell>
          <TableCell
            heading
            backgroundColor={{ type: 'secondary', position: 0 }}
            color={{ type: 'grayscale', position: 4 }}
            hoverBackgroundColor={{ type: 'secondary', position: 1 }}
            hoverColor={{ type: 'grayscale', position: 4 }}
          >
            Heading Cell 2
          </TableCell>
          <TableCell
            backgroundColor={{ type: 'alert', position: 0 }}
            color={{ type: 'grayscale', position: 4 }}
            hoverBackgroundColor={{ type: 'alert', position: 1 }}
            hoverColor={{ type: 'grayscale', position: 4 }}
            heading
          >
            Heading Cell 3
          </TableCell>
        </tr>
      </thead>
      <tbody>
        <tr>
          <TableCell
            backgroundColor={{ type: 'danger', position: 0 }}
            color={{ type: 'grayscale', position: 4 }}
            hoverBackgroundColor={{ type: 'danger', position: 1 }}
            hoverColor={{ type: 'grayscale', position: 4 }}
          >
            Cell 1
          </TableCell>
          <TableCell
            backgroundColor={{ type: 'success', position: 0 }}
            color={{ type: 'grayscale', position: 4 }}
            hoverBackgroundColor={{ type: 'success', position: 1 }}
            hoverColor={{ type: 'grayscale', position: 4 }}
          >
            Cell 2
          </TableCell>
          <TableCell
            backgroundColor={{ type: 'grayscale', position: 0 }}
            color={{ type: 'grayscale', position: 4 }}
            hoverBackgroundColor={{ type: 'grayscale', position: 1 }}
            hoverColor={{ type: 'grayscale', position: 4 }}
          >
            Cell 3
          </TableCell>
        </tr>
      </tbody>
    </table>
  ))
