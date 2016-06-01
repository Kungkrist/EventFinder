/**************************************************************************
*********************
* User Configuration.
***************************************************************************
*******************/
/** Map relative paths to URLs. */
var map = {
    'angularfire2': 'vendor/angularfire2',
    'firebase': 'vendor/firebase/lib/firebase-web.js',
    'moment': 'vendor/moment/moment.js'
};
/** User packages configuration. */
var packages = {
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
var barrels = [
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
];
var cliSystemConfigPackages = {};
barrels.forEach(function (barrelName) {
    cliSystemConfigPackages[barrelName] = {
        main: 'index'
    };
});
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
    map: map,
    packages: packages
});
//# sourceMappingURL=/Users/iths/Documents/VS code projects/EventFinder/tmp/broccoli_type_script_compiler-input_base_path-1fYFoSrg.tmp/0/system-config.js.map