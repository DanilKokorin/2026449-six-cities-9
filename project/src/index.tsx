import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { store } from './store/store';
import { Provider } from 'react-redux';
import { fetchHotelsAction, checkAuthAction, fetchFavoritesAction } from './store/api-action';
import ErrorMessage from './components/ui/error-message/error-message';

store.dispatch(fetchHotelsAction());
store.dispatch(checkAuthAction());
store.dispatch(fetchFavoritesAction());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorMessage />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
