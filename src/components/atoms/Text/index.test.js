import React from 'react'
import { mount } from 'enzyme'
import Input from '.'

const wrapWithMount = (props = {}) => mount(<Input {...props} />)

describe('<Input />', () => {
  it('renders props when passed in', () => {
    const wrapper = wrapWithMount({ type: 'text' })
    expect(wrapper.find({ type: 'text' })).toHaveLength(1)
  })

  it('renders input by default', () => {
    const wrapper = wrapWithMount()
    expect(wrapper.find('input')).toHaveLength(1)
  })

  it('renders select when type is select', () => {
    const wrapper = wrapWithMount({ type: 'select' })
    expect(wrapper.find('select')).toHaveLength(1)
  })

  it('renders textarea when type is textarea', () => {
    const wrapper = wrapWithMount({ type: 'textarea' })
    expect(wrapper.find('textarea')).toHaveLength(1)
  })
})
