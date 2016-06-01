/* global require, module */
var Angular2App = require('angular-cli/lib/broccoli/angular2-app');
module.exports = function(defaults) {
return new Angular2App(defaults, {
vendorNpmFiles: [
'systemjs/dist/system-polyfills.js',
'systemjs/dist/system.src.js',
'zone.js/dist/**/*.+(js|js.map)',
'es6-shim/es6-shim.js',
'reflect-metadata/**/*.+(js|js.map)',
'rxjs/**/*.+(js|js.map)',
'@angular/**/*.+(js|js.map)',
'bootstrap/dist/css/bootstrap.min.css',
'ng2-bootstrap/bundles/ng2-bootstrap.min.js',
'moment/moment.js',
'angularfire2/**/*.js',
'firebase/lib/*.js'
]
});
};