"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var core_1 = require('@angular/core');
var environment_1 = require('./app/environment');
var event_finder_component_1 = require('./app/event-finder.component');
require('rxjs/Rx');
var router_deprecated_1 = require('@angular/router-deprecated');
var my_users_service_1 = require('./app/my-users.service');
var my_events_service_1 = require('./app/my-events.service');
var angularfire2_1 = require('angularfire2/angularfire2');
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
document.addEventListener('deviceready', function () {
    platform_browser_dynamic_1.bootstrap(event_finder_component_1.EventFinderApp, [
        angularfire2_1.FIREBASE_PROVIDERS,
        router_deprecated_1.ROUTER_PROVIDERS,
        angularfire2_1.defaultFirebase('https://sizzling-heat-4438.firebaseio.com'),
        angularfire2_1.firebaseAuthConfig({
            method: angularfire2_1.AuthMethods.Redirect,
            provider: angularfire2_1.AuthProviders.Password
        }), my_users_service_1.MyUsersService, my_events_service_1.MyEventsService
    ]);
}, false);
//# sourceMappingURL=/Users/iths/Documents/VS code projects/EventFinder/tmp/broccoli_type_script_compiler-input_base_path-1fYFoSrg.tmp/0/main.js.map