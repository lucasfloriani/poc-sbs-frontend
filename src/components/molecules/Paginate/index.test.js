import React from 'react'
import { mount, shallow } from 'enzyme'
import Paginate from '.'

const wrapWithMount = (props = {}) => mount(<Paginate {...props} />)
const wrapWithShallow = (props = {}) => shallow(<Paginate {...props} />)

describe('<Paginate />', () => {
  it('renders props when passed in', () => {
    const search = { id: 'foo' }
    const props = {
      id: 'foo',
      totalItems: 150,
      currentPage: 7,
      pageSize: 15,
      maxPages: 5,
      to: 'test',
      ...search,
    }
    const wrapper = wrapWithShallow(props)
    expect(wrapper.find(search)).toHaveLength(1)
  })

  it('renders with all info', () => {
    const props = {
      totalItems: 150,
      currentPage: 7,
      pageSize: 15,
      maxPages: 5,
      to: 'test',
    }
    const wrapper = wrapWithMount(props)
    expect(wrapper.find('nav')).toHaveLength(1)
    expect(wrapper.find('Button')).toHaveLength(7)
  })

  it('renders with only required info', () => {
    const props = {
      totalItems: 150,
      currentPage: 7,
      to: 'test',
    }
    const wrapper = wrapWithMount(props)
    expect(wrapper.find('nav')).toHaveLength(1)
    expect(wrapper.find('Button')).toHaveLength(12)
  })
})
