import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App/App'
import rootReducer from './reducers'
import thunk from 'redux-thunk'

require('dotenv').config()
const storeWithMiddleware = applyMiddleware(thunk)(createStore)


render(
  <Provider store={storeWithMiddleware(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
    <App />
  </Provider>,
  document.getElementById('root')
)
