System.register(['angular2/core', '../my-tile', 'angularfire2', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, my_tile_1, angularfire2_1, router_1;
    var MyUserEventsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (my_tile_1_1) {
                my_tile_1 = my_tile_1_1;
            },
            function (angularfire2_1_1) {
                angularfire2_1 = angularfire2_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            MyUserEventsComponent = (function () {
                function MyUserEventsComponent(af, router, _ref) {
                    this.af = af;
                    this.router = router;
                    this._ref = _ref;
                }
                MyUserEventsComponent.prototype.onClick = function (id) {
                    this.router.navigate(['/My-show-detailsview', { uid: id }]);
                };
                MyUserEventsComponent.prototype.onNewEventClick = function (id) {
                    this.router.navigate(['/My-detailview', { uid: id }]);
                };
                MyUserEventsComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.events = this.af.database.list('/events').map(function (events) {
                        return events.filter(function (event) {
                            return event.uid.includes(_this._ref.getAuth().uid);
                        });
                    });
                };
                MyUserEventsComponent = __decorate([
                    core_1.Component({
                        moduleId: __moduleName,
                        selector: 'my-user-events',
                        templateUrl: 'my-user-events.component.html',
                        styleUrls: ['my-user-events.component.css'],
                        directives: [my_tile_1.MyTileComponent]
                    }),
                    __param(2, core_1.Inject(angularfire2_1.FirebaseRef)), 
                    __metadata('design:paramtypes', [angularfire2_1.AngularFire, router_1.Router, Firebase])
                ], MyUserEventsComponent);
                return MyUserEventsComponent;
            }());
            exports_1("MyUserEventsComponent", MyUserEventsComponent);
        }
    }
});
//# sourceMappingURL=my-user-events.component.js.map