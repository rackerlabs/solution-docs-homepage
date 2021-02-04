
var angular = require('angular');

var moduleName = 'drc.app';
module.exports = moduleName;

angular.module(moduleName, [
    require('angular-sanitize'),
    require('./components/collapsible-nav'),
    require('./components/global-sidebar'),
    require('./controllers/docs-home-services'),
    require('./controllers/docs-home-sidebar'),
    require('./components/sticky'),
    require('./services/filter'),
]);

angular.bootstrap(document, [moduleName]);
