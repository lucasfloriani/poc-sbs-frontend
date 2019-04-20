import React from 'react'
import { shallow } from 'enzyme'
import HomePage from '.'

describe('<HomePage />', () => {
  it('renders', () => {
    shallow(<HomePage />)
  })
})
