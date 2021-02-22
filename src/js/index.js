var app = require('./app');
import React from 'react';
import ReactDOM from 'react-dom';
import App from './imports/App';

ReactDOM.render(<App />, document.getElementById('search'));

algoliasearchNetlify({
    appId: 'TYOYEKS0CV',
    apiKey: '520ab86e5b53119be541d97e15bfe1c5',
    siteId: '53f88b69-965d-4757-a1b9-fa99b18e92c7',
    branch: 'master',
    selector: 'div#search',
});