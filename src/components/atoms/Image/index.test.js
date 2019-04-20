import React from 'react'
import { mount, shallow } from 'enzyme'
import image from './__test__/test.png'
import Image from '.'

const wrapWithShallow = (props = {}) => shallow(<Image alt="Test Image" src={image} {...props} />)
const wrapWithMount = (props = {}) => mount(<Image alt="Test Image" src={image} {...props} />)

describe('<Image />', () => {
  it('renders default', () => {
    const wrapper = wrapWithMount()
    expect(wrapper.find('Img')).toHaveLength(1)
  })
  it('renders with height', () => {
    const props = { height: '50px' }
    const wrapper = wrapWithShallow(props)
    expect(wrapper.find(props)).toHaveLength(1)
  })
  it('renders with width', () => {
    const props = { width: '50px' }
    const wrapper = wrapWithShallow(props)
    expect(wrapper.find(props)).toHaveLength(1)
  })
  it('renders with maxHeight', () => {
    const props = { maxHeight: '30px' }
    const wrapper = wrapWithShallow(props)
    expect(wrapper.find(props)).toHaveLength(1)
  })
  it('renders with maxWidth', () => {
    const props = { maxWidth: '30px' }
    const wrapper = wrapWithShallow(props)
    expect(wrapper.find(props)).toHaveLength(1)
  })
  it('renders with zoom', () => {
    const props = { zoom: 1.5 }
    const wrapper = wrapWithShallow(props)
    expect(wrapper.find(props)).toHaveLength(1)
  })
  it('renders with lazyLoad', () => {
    const wrapper = wrapWithMount({ lazyLoad: true })
    expect(wrapper.find('VisibilitySensor')).toHaveLength(1)
  })
})
