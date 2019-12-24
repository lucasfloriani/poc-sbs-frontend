import React from 'react'
import { render } from 'react-dom'
import { Router } from 'react-router-dom'
import { load } from 'webfontloader'
import { createBrowserHistory } from 'history'
import { Provider } from 'react-redux'
import Store from './store'
import App from './App'
import * as serviceWorker from './serviceWorker'

load({
  google: {
    families: ['Montserrat:300,400,500,600', 'sans-serif'],
  },
})

const history = createBrowserHistory({
  basename: process.env.REACT_APP_BASENAME,
})

render(
  <Provider store={Store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
