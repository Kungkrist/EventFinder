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
var MyLoginComponent = (function () {
    function MyLoginComponent(_af, _ref, router) {
        this._af = _af;
        this._ref = _ref;
        this.router = router;
        this.loginNotation = '';
    }
    MyLoginComponent.prototype.ngOnInit = function () {
        //ost
    };
    MyLoginComponent.prototype.login = function () {
        var _this = this;
        this._ref.authWithPassword({
            email: this.email,
            password: this.password
        }, function (error, authData) {
            if (error) {
                _this.loginNotation = error;
            }
            else {
                _this.router.navigate(['/Home']);
                _this.loginNotation = '';
            }
        });
    };
    MyLoginComponent.prototype.resetPassword = function () {
        var _this = this;
        var str = prompt("Please enter your e-mail");
        if (str != null) {
            this._ref.child('/users').resetPassword({
                email: str
            }, function (error) {
                if (error) {
                    switch (error.code) {
                        case "INVALID_USER":
                            console.log("The specified user account does not exist.");
                            break;
                        default:
                            console.log("Error resetting password:", error);
                    }
                }
                else {
                    console.log("Password reset email sent successfully!");
                    _this.loginNotation = "Temporärt lösenord skickat till " + str;
                }
            });
        }
    };
    MyLoginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-login',
            templateUrl: 'my-login.component.html',
            styleUrls: ['my-login.component.css']
        }),
        __param(1, core_1.Inject(angularfire2_1.FirebaseRef)), 
        __metadata('design:paramtypes', [angularfire2_1.AngularFire, Object, router_deprecated_1.Router])
    ], MyLoginComponent);
    return MyLoginComponent;
}());
exports.MyLoginComponent = MyLoginComponent;
//# sourceMappingURL=/Users/iths/Documents/VS code projects/EventFinder/tmp/broccoli_type_script_compiler-input_base_path-1fYFoSrg.tmp/0/app/my-login/my-login.component.js.map