"use strict";
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
var core_1 = require('@angular/core');
var router_deprecated_1 = require('@angular/router-deprecated');
var angularfire2_1 = require('angularfire2');
var my_main_1 = require('./my-main');
var my_detailview_1 = require('./my-detailview');
var my_show_detailsview_1 = require('./my-show-detailsview');
var my_profile_settings_1 = require('./my-profile-settings');
var my_create_account_component_1 = require('./my-create-account/my-create-account.component');
var my_login_component_1 = require('./my-login/my-login.component');
var angularfire2_2 = require('angularfire2');
var common_1 = require('@angular/common');
var ng2_bootstrap_1 = require('ng2-bootstrap/ng2-bootstrap');
var my_user_events_1 = require('./my-user-events');
var EventFinderApp = (function () {
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
            moduleId: module.id,
            selector: 'event-finder-app',
            providers: [router_deprecated_1.ROUTER_PROVIDERS],
            templateUrl: 'event-finder.component.html',
            styleUrls: ['event-finder.component.css'],
            directives: [router_deprecated_1.ROUTER_DIRECTIVES, common_1.CORE_DIRECTIVES, ng2_bootstrap_1.DROPDOWN_DIRECTIVES],
            pipes: []
        }),
        router_deprecated_1.RouteConfig([
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
        __metadata('design:paramtypes', [angularfire2_1.AngularFire, Object, router_deprecated_1.Router])
    ], EventFinderApp);
    return EventFinderApp;
}());
exports.EventFinderApp = EventFinderApp;
//# sourceMappingURL=/Users/iths/Documents/VS code projects/EventFinder/tmp/broccoli_type_script_compiler-input_base_path-1fYFoSrg.tmp/0/app/event-finder.component.js.map