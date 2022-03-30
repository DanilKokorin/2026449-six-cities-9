import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { store } from './store';
import { Provider } from 'react-redux';
import { fetchHotelsAction, checkAuthAction } from './store/api-action';
import ErrorMessage from './components/UI/error-message/ErrorMessage';

store.dispatch(fetchHotelsAction());
store.dispatch(checkAuthAction());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorMessage />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
