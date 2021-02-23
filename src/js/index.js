var app = require('./app');
import React from 'react';
import ReactDOM from 'react-dom';
import App from './imports/App';

algoliasearchNetlify({
    appId: 'A05K9F5RGB',
    apiKey: '12aeb45caf8aa0724cf852a04e6c0646',
    siteId: '22f90b68-b04d-411c-a401-a4e19170c6ae',
    branch: 'master',
    selector: 'div#crawler-search',
});

ReactDOM.render(<App />, document.getElementById('search'));
