import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/pages/App';
import reportWebVitals from './reportWebVitals';
// import firebase from './config/firebase';

// console.log('Config Firebase: ', firebase);

ReactDOM.render(
  // eslint-disable-next-line react/jsx-filename-extension
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
