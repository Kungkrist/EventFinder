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
    var MyCreateAccountComponent;
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
            MyCreateAccountComponent = (function () {
                function MyCreateAccountComponent(_af, _ref, router) {
                    this._af = _af;
                    this._ref = _ref;
                    this.router = router;
                    this.email = '';
                    this.password = '';
                    this.username = '';
                    this.createAnnotation = '';
                }
                MyCreateAccountComponent.prototype.ngOnInit = function () {
                };
                MyCreateAccountComponent.prototype.createAccount = function () {
                    var _this = this;
                    var self;
                    if (this.email !== '' && this.password !== '' && this.username !== '') {
                        this._ref.createUser({
                            email: this.email,
                            password: this.password
                        }, function (error, userData) {
                            if (error) {
                                switch (error.code) {
                                    case "EMAIL_TAKEN":
                                        _this.createAnnotation = 'The new user account cannot be created because the email is already in use.';
                                        break;
                                    case "INVALID_EMAIL":
                                        _this.createAnnotation = 'The specified email is not a valid email.';
                                        break;
                                    default:
                                        _this.createAnnotation = 'Error creating user: ' + error;
                                }
                            }
                            else {
                                _this.createAnnotation = '';
                                var user = { username: _this.username,
                                    uid: userData.uid,
                                    events: [''],
                                    firstName: '',
                                    lastName: '',
                                    email: _this.email };
                                _this._af.database.object("/users/" + userData.uid).set(user);
                                _this.router.navigate(['/Login']);
                            }
                        });
                    }
                    else {
                        this.createAnnotation = 'You need to fill all the textfields.';
                    }
                };
                MyCreateAccountComponent = __decorate([
                    core_1.Component({
                        moduleId: __moduleName,
                        selector: 'my-create-account',
                        templateUrl: 'my-create-account.component.html',
                        styleUrls: ['my-create-account.component.css']
                    }),
                    __param(1, core_1.Inject(angularfire2_1.FirebaseRef)), 
                    __metadata('design:paramtypes', [angularfire2_1.AngularFire, Firebase, router_1.Router])
                ], MyCreateAccountComponent);
                return MyCreateAccountComponent;
            }());
            exports_1("MyCreateAccountComponent", MyCreateAccountComponent);
        }
    }
});
//# sourceMappingURL=my-create-account.component.js.map