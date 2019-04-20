import React from 'react'
import { shallow } from 'enzyme'
import Paragraph from '.'

const wrapWithShallow = (props = {}) => shallow(<Paragraph {...props} />)

describe('<Paragraph />', () => {
  it('renders children when passed in', () => {
    const wrapper = wrapWithShallow({ children: 'test' })
    expect(wrapper.contains('test')).toBe(true)
  })

  it('renders props when passed in', () => {
    const wrapper = wrapWithShallow({ id: 'foo' })
    expect(wrapper.find({ id: 'foo' })).toHaveLength(1)
  })

  it('renders with size', () => {
    const props = { fontSize: 'extraLarge' }
    const wrapper = wrapWithShallow(props)
    expect(wrapper.find(props)).toHaveLength(1)
  })

  it('renders with color', () => {
    const props = { color: { type: 'primary', position: 0 } }
    const wrapper = wrapWithShallow(props)
    expect(wrapper.find(props)).toHaveLength(1)
  })
})
