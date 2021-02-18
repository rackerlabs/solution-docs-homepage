var app = require('./app');
import React from 'react';
import ReactDOM from 'react-dom';
import App from './imports/App';
ReactDOM.render(<App />, document.getElementById('search'));
console.log(algoliasearchNetlify({
    appId: ALGOLIA_APP_ID,
    apiKey: ALGOLIA_API_KEY,
    siteId: ALGOLIA_SITE_ID,
    branch: ALGOLIA_BRANCH,
    selector: 'div#search',
}));