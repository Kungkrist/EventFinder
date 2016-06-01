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
var angularfire2_1 = require('angularfire2/angularfire2');
var MyUsersService = (function () {
    function MyUsersService(_af, _ref) {
        this._af = _af;
        this._ref = _ref;
    }
    MyUsersService.prototype.createAccount = function (email, password) {
        var _this = this;
        return new Promise(function (resolve) {
            _this._ref.createUser({
                email: email,
                password: password
            }, function (error, userData) {
                var result = { "error": error, "userData": userData };
                resolve(result);
            });
        });
    };
    MyUsersService.prototype.addUser = function (userId, data) {
        this._af.database.object("/users/" + userId).set(data);
    };
    MyUsersService = __decorate([
        core_1.Injectable(),
        __param(1, core_1.Inject(angularfire2_1.FirebaseRef)), 
        __metadata('design:paramtypes', [angularfire2_1.AngularFire, Object])
    ], MyUsersService);
    return MyUsersService;
}());
exports.MyUsersService = MyUsersService;
//# sourceMappingURL=/Users/iths/Documents/VS code projects/EventFinder/tmp/broccoli_type_script_compiler-input_base_path-1fYFoSrg.tmp/0/app/my-users.service.js.map