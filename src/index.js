import React from 'react';
import ReactDOM from 'react-dom';
import RouterComponent from './RouterComponent';
import './index.css';
import bookStore from "./BookStore";

ReactDOM.render(
  <RouterComponent bookStore={bookStore} msg="Hello World"/>,
  document.getElementById('root')
);
