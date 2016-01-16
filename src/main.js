import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'

import App from './components/app'
import { rootReducer } from './reducers/root'

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
  createLogger()
)(createStore)

const store = createStoreWithMiddleware(rootReducer)

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('app')
);
