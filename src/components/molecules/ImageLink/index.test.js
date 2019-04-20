import React from 'react'
import { mount } from 'enzyme'
import { BrowserRouter } from 'react-router-dom'
import ImageLink from '.'
import image from './__test__/test.png'

const wrapWithMount = (props = {}) => mount(<ImageLink alt="Test Image" src={image} {...props} />)

describe('<ImageLink />', () => {
  it('renders default', () => {
    const wrapper = wrapWithMount({ href: 'https://google.com' })
    expect(wrapper.find('ImageLink')).toHaveLength(1)
  })
  it('renders with link', () => {
    const props = { to: 'https://google.com' }
    const wrapper = mount(
      <BrowserRouter>
        <ImageLink alt="Test Image" src={image} {...props} />
      </BrowserRouter>
    )
    expect(wrapper.find('Link')).toHaveLength(1)
  })
})
