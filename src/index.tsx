import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './index.scss';
import Store from './redux/store/store';
import { Provider } from 'react-redux';

const store = Store();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
