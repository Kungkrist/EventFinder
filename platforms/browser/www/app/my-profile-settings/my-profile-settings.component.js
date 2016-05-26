System.register(['angular2/core', 'angularfire2', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, angularfire2_1, router_1;
    var MyProfileSettingsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (angularfire2_1_1) {
                angularfire2_1 = angularfire2_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            MyProfileSettingsComponent = (function () {
                function MyProfileSettingsComponent(ref, data, params, router, af) {
                    this.ref = ref;
                    this.data = data;
                    this.params = params;
                    this.router = router;
                    this.af = af;
                    this.loginNotation = '';
                }
                MyProfileSettingsComponent.prototype.ngOnInit = function () {
                };
                MyProfileSettingsComponent.prototype.changePassword = function () {
                    var _this = this;
                    this.ref.changePassword({
                        email: this.email,
                        oldPassword: this.oldPassword,
                        newPassword: this.newPassword
                    }, function (error) {
                        if (error) {
                            switch (error.code) {
                                case "INVALID_PASSWORD":
                                    console.log("The specified user account password is incorrect.");
                                    break;
                                case "INVALID_USER":
                                    console.log("The specified user account does not exist.");
                                    break;
                                default:
                                    console.log("Error changing password:", error);
                            }
                        }
                        else {
                            console.log("User password changed successfully!");
                            _this.loginNotation = "Lösenord ändrat!";
                        }
                    });
                };
                MyProfileSettingsComponent = __decorate([
                    core_1.Component({
                        moduleId: __moduleName,
                        selector: 'my-profile-settings',
                        templateUrl: 'my-profile-settings.component.html',
                        styleUrls: ['my-profile-settings.component.css']
                    }),
                    __param(0, core_1.Inject(angularfire2_1.FirebaseRef)), 
                    __metadata('design:paramtypes', [Firebase, router_1.RouteData, router_1.RouteParams, router_1.Router, angularfire2_1.AngularFire])
                ], MyProfileSettingsComponent);
                return MyProfileSettingsComponent;
            }());
            exports_1("MyProfileSettingsComponent", MyProfileSettingsComponent);
        }
    }
});
//# sourceMappingURL=my-profile-settings.component.js.map