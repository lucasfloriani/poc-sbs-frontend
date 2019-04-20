import React from 'react'
import { mount, shallow } from 'enzyme'
import { BrowserRouter } from 'react-router-dom'
import Button from '.'

const wrapWithShallow = (props = {}) => shallow(<Button {...props} />)
const wrapWithMount = (props = {}) => mount(<Button {...props} />)

describe('<Button />', () => {
  it('renders', () => {
    const wrapper = wrapWithMount()
    expect(wrapper.find('button')).toHaveLength(1)
  })
  it('renders props when passed in', () => {
    const wrapper = wrapWithShallow({ type: 'submit' })
    expect(wrapper.find({ type: 'submit' })).toHaveLength(1)
  })
  it('renders children when passed in', () => {
    const wrapper = wrapWithShallow({ children: 'test' })
    expect(wrapper.contains('test')).toBe(true)
  })
  it('renders anchor when href is passed in', () => {
    const wrapper = wrapWithMount({ href: 'test' })
    expect(wrapper.find('a')).toHaveLength(1)
  })
  it('renders with shadow', () => {
    const props = { shadow: 'extraLarge' }
    const wrapper = wrapWithMount(props)
    expect(wrapper.find(props))
  })
  it('renders with colors', () => {
    const props = {
      color: { type: 'grayscale', position: 4 },
      hoverColor: { type: 'grayscale', position: 4 },
      backgroundColor: { type: 'primary', position: 0 },
      hoverBackgroundColor: { type: 'primary', position: 1 },
    }
    const wrapper = wrapWithMount(props)
    expect(wrapper.find(props))
  })
  it('renders with disable', () => {
    const props = { disabled: true }
    const wrapper = wrapWithMount(props)
    expect(wrapper.find(props))
  })
  it('renders Link when to is passed in', () => {
    const props = { to: 'test' }
    const wrapper = mount(
      <BrowserRouter>
        <Button {...props} />
      </BrowserRouter>
    )
    expect(wrapper.find('Link')).toHaveLength(1)
  })
})
