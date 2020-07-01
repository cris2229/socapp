import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './page/header';

import App from './App';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(<Header /> , document.getElementById('header'));
ReactDOM.render(
    <div>
        <App/>
    </div>
    , document.getElementById('root'));
serviceWorker.unregister();
