import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Main';

// import 'jquery/dist/jquery';

// import js from '!!raw!./GlobalSelectors.js';
// import css from '!!raw!./GlobalSelectors.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';

// console.log($);
// console.log($().jquery);

// Render the main component into the dom
ReactDOM.render(<App />, document.getElementById('app'));
