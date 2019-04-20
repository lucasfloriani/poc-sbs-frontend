import React from 'react'
import { mount, shallow } from 'enzyme'
import Icon from '.'

const wrap = (props = {}) => {
  const component = <Icon icon="menu" {...props} />
  return {
    withShallow: () => shallow(component),
    withMount: () => mount(component),
  }
}

describe('<Icon />', () => {
  it('renders default', () => {
    const wrapper = wrap().withMount()
    expect(wrapper.find('span')).toHaveLength(1)
  })
  it('renders props when passed in', () => {
    const props = { id: 'foo' }
    const wrapper = wrap(props).withShallow()
    expect(wrapper.find(props)).toHaveLength(1)
  })
  it('renders with color', () => {
    const props = { color: { type: 'secondary', position: 0 } }
    const wrapper = wrap(props).withShallow()
    expect(wrapper.find(props)).toHaveLength(1)
  })
  it('renders with hover color', () => {
    const props = { hoverColor: { type: 'secondary', position: 0 } }
    const wrapper = wrap(props).withShallow()
    expect(wrapper.find(props)).toHaveLength(1)
  })
  it('renders with size', () => {
    const props = { size: 'extraLarge' }
    const wrapper = wrap(props).withShallow()
    expect(wrapper.find(props)).toHaveLength(1)
  })
})
