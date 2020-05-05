import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'tachyons';
// import App from './App';
import Rentcar from './Rentcar';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Rentcar />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
