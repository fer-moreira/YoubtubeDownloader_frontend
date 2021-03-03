import React from 'react';
import ReactDOM from 'react-dom';

// import './index.css';
// import App from './App';

import './static/scss/base.scss';

import Mainpage from "./pages/mainpage";

ReactDOM.render(
  <React.StrictMode>
    <Mainpage />
  </React.StrictMode>,
  document.getElementById('root')
);
