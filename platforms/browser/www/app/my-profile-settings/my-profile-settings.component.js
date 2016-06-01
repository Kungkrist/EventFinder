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
var angularfire2_1 = require('angularfire2');
var router_deprecated_1 = require('@angular/router-deprecated');
var MyProfileSettingsComponent = (function () {
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
            moduleId: module.id,
            selector: 'my-profile-settings',
            templateUrl: 'my-profile-settings.component.html',
            styleUrls: ['my-profile-settings.component.css']
        }),
        __param(0, core_1.Inject(angularfire2_1.FirebaseRef)), 
        __metadata('design:paramtypes', [Object, router_deprecated_1.RouteData, router_deprecated_1.RouteParams, router_deprecated_1.Router, angularfire2_1.AngularFire])
    ], MyProfileSettingsComponent);
    return MyProfileSettingsComponent;
}());
exports.MyProfileSettingsComponent = MyProfileSettingsComponent;
//# sourceMappingURL=/Users/iths/Documents/VS code projects/EventFinder/tmp/broccoli_type_script_compiler-input_base_path-1fYFoSrg.tmp/0/app/my-profile-settings/my-profile-settings.component.js.map