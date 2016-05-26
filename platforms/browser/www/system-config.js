System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var barrels, config;
    function createPackageConfig(barrelList) {
        return barrelList.reduce(function (barrelConfig, barrelName) {
            barrelConfig[barrelName] = {
                format: 'register',
                defaultExtension: 'js',
                main: 'index'
            };
            return barrelConfig;
        }, {});
    }
    return {
        setters:[],
        execute: function() {
            barrels = [
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
            // Add your custom SystemJS configuration here.
            exports_1("config", config = {
                packages: Object.assign({
                    angularfire2: {
                        defaultExtension: 'js',
                        main: 'angularfire2'
                    }
                }, createPackageConfig(barrels)),
                map: {
                    'moment': 'vendor/moment/moment.js',
                    'firebase': ' vendor/firebase/lib/firebase-web.js',
                    'angularfire2': 'vendor/angularfire2'
                }
            });
        }
    }
});
//# sourceMappingURL=system-config.js.map