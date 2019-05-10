import React from 'react';
import ReactDOM from 'react-dom';
import { ActionCableProvider } from 'react-actioncable-provider';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import './index.css';
import App from './App';
import { API_WS_ROOT } from './Constants/index';
import * as serviceWorker from './serviceWorker';

import rootReducer from './Redux/Reducers/rootReducer';

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;

ReactDOM.render(
  <Provider store={store}>
    <ActionCableProvider url={API_WS_ROOT}>
      <App />
    </ActionCableProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
