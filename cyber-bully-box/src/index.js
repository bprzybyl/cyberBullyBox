import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Base from './components/Base';
import { BrowserRouter } from 'react-router-dom'


ReactDOM.render(
  <BrowserRouter>
      <Base />
  </BrowserRouter>,
  document.getElementById('root'));
