import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import App from './components/app';
import configureStore from './store/configureStore';
import './styles/core.scss';

// Configure store to work with React router 
const store = configureStore(),
    history = syncHistoryWithStore(hashHistory, store);

// Render application
ReactDOM.render(
    <App store={store} history={history} />,
    document.getElementById('app')
);