import React from 'react'
import { mount, shallow } from 'enzyme'
import Heading from '.'

const wrapWithShallow = (props = {}) => shallow(<Heading {...props} />)
const wrapWithMount = (props = {}) => mount(<Heading {...props} />)

describe('<Heading />', () => {
  it('renders children when passed in', () => {
    const wrapper = wrapWithShallow({ children: 'test' })
    expect(wrapper.contains('test')).toBe(true)
  })

  it('renders props when passed in', () => {
    const wrapper = wrapWithShallow({ id: 'foo' })
    expect(wrapper.find({ id: 'foo' })).toHaveLength(1)
  })

  it('renders h1 by default', () => {
    const wrapper = wrapWithMount()
    expect(wrapper.find('h1')).toHaveLength(1)
  })

  it('renders with color', () => {
    const props = {
      color: { type: 'secondary', position: 0 },
      hoverColor: { type: 'primary', position: 0 },
    }
    const wrapper = wrapWithShallow(props)
    expect(wrapper.find(props)).toHaveLength(1)
  })

  it('renders with level', () => {
    const wrapper = wrapWithMount({ level: 3 })
    expect(wrapper.find('h3')).toHaveLength(1)
  })

  it('renders with fontSize', () => {
    const props = { fontSize: 'small' }
    const wrapper = wrapWithShallow(props)
    expect(wrapper.find(props)).toHaveLength(1)
  })

  it('renders with fontWeight', () => {
    const props = { fontWeight: 'light' }
    const wrapper = wrapWithShallow(props)
    expect(wrapper.find(props)).toHaveLength(1)
  })
})
