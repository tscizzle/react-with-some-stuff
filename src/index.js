import React from 'react';
import ReactDOM from 'react-dom';
import {Google} from './app';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<Google />, document.getElementById('root'));
registerServiceWorker();
