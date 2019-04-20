import React from 'react'
import { shallow } from 'enzyme'
import Block from '.'

const wrap = (props = {}) => shallow(<Block {...props} />)

describe('<Block />', () => {
  it('renders children when passed in', () => {
    const wrapper = wrap({ children: 'test' })
    expect(wrapper.contains('test')).toBe(true)
  })

  it('renders props when passed in', () => {
    const wrapper = wrap({ id: 'foo' })
    expect(wrapper.find({ id: 'foo' })).toHaveLength(1)
  })

  it('renders with backgroundColor prop', () => {
    const props = { backgroundColor: { type: 'secondary', position: 0 } }
    const wrapper = wrap(props)
    expect(wrapper.find(props)).toHaveLength(1)
  })
})
