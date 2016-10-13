import React from 'react';
import ReactDOM from 'react-dom';
import {Provider}  from 'react-redux';
import store from './redux/store';
import App from './components/app';

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('app')
);
