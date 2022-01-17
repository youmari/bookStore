import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

// import { Provider } from 'react-redux'

ReactDOM.render(
  <React.StrictMode>
    {/* <Provider store={}> */}
    <Router>
      <App />
    </Router>
    {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById('root'),
);
