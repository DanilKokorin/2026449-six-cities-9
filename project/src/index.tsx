import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { hotels } from './mocks/offers';
import { favorites } from './mocks/reviews';

ReactDOM.render(
  <React.StrictMode>
    <App hotels={hotels} favorites={favorites}/>
  </React.StrictMode>,
  document.getElementById('root'));
