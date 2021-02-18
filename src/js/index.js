var app = require('./app');
import React from 'react';
import ReactDOM from 'react-dom';
import App from './imports/App';
import { algoliaCrawl, generateSitemap } from "algolia-crawl";

await algoliaCrawl(); // Crawl all pages and sync index
await generateSitemap("sitemap.xml"); // Generate a sitemap.xml file
ReactDOM.render(<App />, document.getElementById('search'));