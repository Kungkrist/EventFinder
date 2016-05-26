System.register(['angular2/core', 'angular2/router', 'angularfire2', './my-main', './my-detailview', './my-show-detailsview', './my-profile-settings', './my-create-account/my-create-account.component', './my-login/my-login.component', 'angular2/common', 'ng2-bootstrap/ng2-bootstrap', './my-user-events'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, router_1, angularfire2_1, my_main_1, my_detailview_1, my_show_detailsview_1, my_profile_settings_1, my_create_account_component_1, my_login_component_1, angularfire2_2, common_1, ng2_bootstrap_1, my_user_events_1;
    var EventFinderApp;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (angularfire2_1_1) {
                angularfire2_1 = angularfire2_1_1;
                angularfire2_2 = angularfire2_1_1;
            },
            function (my_main_1_1) {
                my_main_1 = my_main_1_1;
            },
            function (my_detailview_1_1) {
                my_detailview_1 = my_detailview_1_1;
            },
            function (my_show_detailsview_1_1) {
                my_show_detailsview_1 = my_show_detailsview_1_1;
            },
            function (my_profile_settings_1_1) {
                my_profile_settings_1 = my_profile_settings_1_1;
            },
            function (my_create_account_component_1_1) {
                my_create_account_component_1 = my_create_account_component_1_1;
            },
            function (my_login_component_1_1) {
                my_login_component_1 = my_login_component_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (ng2_bootstrap_1_1) {
                ng2_bootstrap_1 = ng2_bootstrap_1_1;
            },
            function (my_user_events_1_1) {
                my_user_events_1 = my_user_events_1_1;
            }],
        execute: function() {
            EventFinderApp = (function () {
                function EventFinderApp(af, ref, router) {
                    this.af = af;
                    this.ref = ref;
                    this.router = router;
                    this.disabled = false;
                    this.status = { isopen: false };
                    this.items = ['The first choice!',
                        'And another choice for you.', 'but wait! A third!'];
                }
                EventFinderApp.prototype.ngDoCheck = function () {
                    if (this.users === undefined) {
                        try {
                            this.users = this.af.database.list('/users/' + this.ref.getAuth().uid);
                            console.log("hej");
                        }
                        catch (e) {
                        }
                    }
                };
                EventFinderApp.prototype.toggled = function (open) {
                    console.log('Dropdown is now: ', open);
                };
                EventFinderApp.prototype.toggleDropdown = function ($event) {
                    $event.preventDefault();
                    $event.stopPropagation();
                    this.status.isopen = !this.status.isopen;
                };
                EventFinderApp.prototype.logout = function () {
                    this.users = undefined;
                    this.af.auth.logout();
                };
                EventFinderApp.prototype.ngOnInit = function () {
                    //this.logout();
                };
                EventFinderApp.prototype.newEventClick = function () {
                    this.router.navigate(['/My-detailview', { uid: '' }]);
                    return false;
                };
                EventFinderApp = __decorate([
                    core_1.Component({
                        moduleId: __moduleName,
                        selector: 'event-finder-app',
                        providers: [router_1.ROUTER_PROVIDERS],
                        templateUrl: 'event-finder.component.html',
                        styleUrls: ['event-finder.component.css'],
                        directives: [router_1.ROUTER_DIRECTIVES, common_1.CORE_DIRECTIVES, ng2_bootstrap_1.DROPDOWN_DIRECTIVES],
                        pipes: []
                    }),
                    router_1.RouteConfig([
                        { path: '/home', name: 'Home', component: my_main_1.MyMainComponent, useAsDefault: true },
                        { path: '/my-detailview', name: 'My-detailview', component: my_detailview_1.MyDetailviewComponent },
                        { path: '/my-show-detailsview', name: 'My-show-detailsview', component: my_show_detailsview_1.MyShowDetailsviewComponent },
                        { path: '/create-account', name: 'CreateAccount', component: my_create_account_component_1.MyCreateAccountComponent },
                        { path: '/login', name: 'Login', component: my_login_component_1.MyLoginComponent },
                        { path: '/my-events', name: 'UserEvents', component: my_user_events_1.MyUserEventsComponent },
                        { path: '/my-profile-settings', name: 'Settings', component: my_profile_settings_1.MyProfileSettingsComponent },
                        { path: '/*path', component: my_main_1.MyMainComponent }
                    ]),
                    __param(1, core_1.Inject(angularfire2_2.FirebaseRef)), 
                    __metadata('design:paramtypes', [angularfire2_1.AngularFire, Firebase, router_1.Router])
                ], EventFinderApp);
                return EventFinderApp;
            }());
            exports_1("EventFinderApp", EventFinderApp);
        }
    }
});
//# sourceMappingURL=event-finder.component.js.map