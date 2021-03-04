import React from 'react';
import ReactDOM from 'react-dom';

import './static/scss/base.scss';
import Mainpage from "./pages/mainpage";

// var cors = require('cors');

ReactDOM.render(
  <React.StrictMode>
    <Mainpage />
  </React.StrictMode>,
  document.getElementById('root')
);

// app.use(cors());