import React from 'react'
import { mount, shallow } from 'enzyme'
import TableCell from '.'

const wrapWithShallow = (props = {}) => shallow(<TableCell {...props} />)

describe('<TableCell />', () => {
  it('renders children when passed in', () => {
    const wrapper = wrapWithShallow({ children: 'test' })
    expect(wrapper.contains('test')).toBe(true)
  })

  it('renders props when passed in', () => {
    const wrapper = wrapWithShallow({ id: 'foo' })
    expect(wrapper.find({ id: 'foo' })).toHaveLength(1)
  })

  it('renders td by default', () => {
    const wrapper = mount(
      <table>
        <tbody>
          <tr>
            <TableCell />
          </tr>
        </tbody>
      </table>
    )
    expect(wrapper.find('td')).toHaveLength(1)
  })

  it('renders th when prop heading is passed in', () => {
    const props = { heading: true }
    const wrapper = mount(
      <table>
        <thead>
          <tr>
            <TableCell {...props} />
          </tr>
        </thead>
      </table>
    )
    expect(wrapper.find('th')).toHaveLength(1)
  })

  it('renders with colors options', () => {
    const props = {
      backgroundColor: { type: 'primary', position: 5 },
      color: { type: 'grayscale', position: 1 },
      hoverBackgroundColor: { type: 'primary', position: 4 },
      hoverColor: { type: 'grayscale', position: 0 },
    }
    const wrapper = mount(
      <table>
        <tbody>
          <tr>
            <TableCell {...props} />
          </tr>
        </tbody>
      </table>
    )
    expect(wrapper.find('td')).toHaveLength(1)
  })
})
