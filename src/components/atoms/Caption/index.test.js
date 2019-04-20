import React from 'react'
import { shallow } from 'enzyme'
import Caption from '.'

const wrap = (props = {}) => shallow(<Caption {...props} />)

describe('<Caption />', () => {
  it('renders children when passed in', () => {
    const wrapper = wrap({ children: 'test' })
    expect(wrapper.contains('test')).toBe(true)
  })

  it('renders props when passed in', () => {
    const props = { id: 'foo' }
    const wrapper = wrap(props)
    expect(wrapper.find(props)).toHaveLength(1)
  })

  it('renders colors when passed in', () => {
    const props = {
      backgroundColor: { type: 'primary', position: 2 },
      color: { type: 'grayscale', position: 3 },
    }
    const wrapper = wrap(props)
    expect(wrapper.find(props)).toHaveLength(1)
  })
})
