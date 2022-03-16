import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { favorites } from './mocks/reviews';
// import { store } from './store';
// import { Provider } from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <App favorites={favorites} />
    {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById('root'));
