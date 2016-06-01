/**************************************************************************
*********************
* User Configuration.
***************************************************************************
*******************/
/** Map relative paths to URLs. */
const map: any = {
'angularfire2': 'vendor/angularfire2',
'firebase': 'vendor/firebase/lib/firebase-web.js',
'moment': 'vendor/moment/moment.js'
};
/** User packages configuration. */
const packages: any = {
angularfire2: {
defaultExtension: 'js',
main: 'angularfire2.js'
}
};
////////////////////////////////////////////////////////////////////////////////////////////////
/**************************************************************************
*********************
* Everything underneath this line is managed by the CLI.
***************************************************************************
*******************/
const barrels: string[] = [
// Angular specific barrels.
'@angular/core',
'@angular/common',
'@angular/compiler',
'@angular/http',
'@angular/router',
'@angular/router-deprecated',
'@angular/platform-browser',
'@angular/platform-browser-dynamic',
// Thirdparty barrels.
'rxjs',
// App specific barrels.
'app',
  'app/shared',
  'app/my-demosearch',
  'app/my-main',
  'app/my-navbar',
  'app/my-comment',
  'app/my-detailview',
  'app/my-tile',
  'app/my-event-container',
  'app/my-show-detailsview',
  'app/my-carousel',
  'app/my-searchbar',
  'app/my-login',
  'app/my-create-account',
  'app/my-user-events',
  'app/my-profile-settings',
/** @cli-barrel */
];
const cliSystemConfigPackages: any = {};
barrels.forEach((barrelName: string) => {
cliSystemConfigPackages[barrelName] = {
main: 'index'
};
});
/** Type declaration for ambient System. */
declare var System: any;
// Apply the CLI SystemJS configuration.
System.config({
map: {
'@angular': 'vendor/@angular',
'rxjs': 'vendor/rxjs',
'main': 'main.js'
},
packages: cliSystemConfigPackages
});
// Apply the user's configuration.
System.config({
map,
packages
});
