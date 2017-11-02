import React from 'react';
import ReactDOM from 'react-dom';
import App from '../react/src/App';
import { BrowserRouter } from 'react-router-dom'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>, document.getElementById('app'));
})
