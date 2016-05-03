/* global require, module */
var Angular2App = require('angular-cli/lib/broccoli/angular2-app');

module.exports = function(defaults) {
 return new Angular2App(defaults, {
  vendorNpmFiles: [
    'bootstrap/dist/css/bootstrap.min.css',
    'ng2-bootstrap/bundles/ng2-bootstrap.min.js',
    'moment/moment.js',
    'angularfire2/**/*.js',
    'firebase/lib/*.js'
  ]
 });
};
