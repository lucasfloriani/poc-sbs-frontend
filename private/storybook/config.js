import React from 'react'
import { configure, addDecorator } from '@storybook/react'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyles, theme } from '@theme'

const req = require.context('components', true, /.stories.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

addDecorator(story => (
  <BrowserRouter>
    <React.Fragment>
      <GlobalStyles />
      <ThemeProvider theme={theme}>{story()}</ThemeProvider>
    </React.Fragment>
  </BrowserRouter>
))

configure(loadStories, module)
