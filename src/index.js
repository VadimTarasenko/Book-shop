import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { Provider } from 'react-redux';
import createStore from './store';
import 'semantic-ui-css/semantic.min.css';
import 'react-toastify/dist/ReactToastify.min.css';
import './app.css';

ReactDOM.render(
  <Provider store={createStore()}>
    <App/>
  </Provider>,
  document.getElementById('root')
);