// index.js
// bootstrap react application

// hosting react app into browser
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';

import './index.css';
import {BrowserRouter as Router} from 'react-router-dom';

import { Security } from '@okta/okta-react';

import configureStore from './app/configureStore';
import {Provider} from 'react-redux';

// .env.local is imported here as ENV variable
const oktaConfig = {
    issuer: `${process.env.REACT_APP_OKTA_ORG_URL}/oauth2/default`,
    redirect_uri: `${window.location.origin}/implicit/callback`,
    client_id: process.env.REACT_APP_OKTA_CLIENT_ID,
};

const store = configureStore();

// ReactDOM => diffing, patching, react events
// ReactDOM.render(Virtual DOM, Real DOM)
// Unidirectional data flow => Virtual DOM to REAL DOM not other way
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Security {...oktaConfig}>
                <App />
            </Security>
        </Router>
    </Provider>
    ,document.getElementById('root'))