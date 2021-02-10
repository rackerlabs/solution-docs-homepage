
var angular = require('angular');

var moduleName = 'drc.app';
module.exports = moduleName;

angular.module(moduleName, [
    require('angular-sanitize'),
    require('./components/flex-height'),
    require('./components/global-sidebar'),
    require('./components/collapsible-nav'),
    require('./components/scroll-indicator'),
    require('./components/language-selector'),
    require('./controllers/docs-home-services'),
    require('./controllers/docs-home-sidebar'),
    require('./components/sticky'),
    require('./services/filter'),
]);

angular.bootstrap(document, [moduleName]);
