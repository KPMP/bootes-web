import React from 'react';
import ReactDOM from 'react-dom';
import 'react-app-polyfill/ie11';
import 'core-js/features/array/find';
import 'core-js/features/array/includes';
import 'core-js/features/number/is-nan';
import '../node_modules/bootstrap-css-only/css/bootstrap.min.css';
import './index.css';
import './react-table.css';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
