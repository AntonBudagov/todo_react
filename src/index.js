import React from 'react';
import ReactDom from 'react-dom';
import App from './components/app'
import {Provider} from 'react-redux';
import store from './redux/store'

console.log(store);

ReactDom.render(
  <Provider
    store={store}>
    <App/>
  </Provider>, document.getElementById('root'));