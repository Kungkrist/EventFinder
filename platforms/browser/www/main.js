System.register(['angular2/platform/browser', 'angular2/core', './app/environment', './app/event-finder.component', 'rxjs/Rx', 'angular2/router', 'angularfire2/angularfire2'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, core_1, environment_1, event_finder_component_1, router_1, router_2, angularfire2_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (environment_1_1) {
                environment_1 = environment_1_1;
            },
            function (event_finder_component_1_1) {
                event_finder_component_1 = event_finder_component_1_1;
            },
            function (_1) {},
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            },
            function (angularfire2_1_1) {
                angularfire2_1 = angularfire2_1_1;
            }],
        execute: function() {
            if (environment_1.environment.production) {
                core_1.enableProdMode();
            }
            //document.addEventListener('deviceready', () => {
            browser_1.bootstrap(event_finder_component_1.EventFinderApp, [
                router_2.RouteConfig,
                angularfire2_1.FIREBASE_PROVIDERS,
                router_1.ROUTER_PROVIDERS,
                angularfire2_1.defaultFirebase('https://sizzling-heat-4438.firebaseio.com'),
                angularfire2_1.firebaseAuthConfig({
                    method: angularfire2_1.AuthMethods.Redirect,
                    provider: angularfire2_1.AuthProviders.Password
                })
            ]);
        }
    }
});
//}, false);
//# sourceMappingURL=main.js.map