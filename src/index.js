import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './chat.css';
import { Provider } from 'react-redux';
import App from './components/App';
import { configureStore } from './store';

const store = configureStore();
console.log('store', store);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
