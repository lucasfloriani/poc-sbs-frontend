import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { LastLocationProvider } from 'react-router-last-location'
import { load } from 'webfontloader'
import { Provider } from 'react-redux'
import { basename } from './config'
import Store from './store'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'

load({
  google: {
    families: ['Montserrat:300,400,500,600', 'sans-serif'],
  },
})

const renderApp = () => (
  <Provider store={Store}>
    <BrowserRouter basename={basename}>
      <LastLocationProvider>
        <App />
      </LastLocationProvider>
    </BrowserRouter>
  </Provider>
)

render(renderApp(), document.getElementById('app'))
registerServiceWorker()
