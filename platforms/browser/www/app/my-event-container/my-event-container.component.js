System.register(['angular2/core', '../my-tile', 'angularfire2', 'angular2/router', '../search.pipe'], function(exports_1, context_1) {
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
    var core_1, my_tile_1, angularfire2_1, router_1, search_pipe_1;
    var MyEventContainerComponent;
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
            },
            function (search_pipe_1_1) {
                search_pipe_1 = search_pipe_1_1;
            }],
        execute: function() {
            MyEventContainerComponent = (function () {
                function MyEventContainerComponent(af, router) {
                    this.af = af;
                    this.router = router;
                }
                MyEventContainerComponent.prototype.onClick = function (id) {
                    this.router.navigate(['/My-show-detailsview', { uid: id }]);
                };
                MyEventContainerComponent.prototype.ngOnInit = function () {
                    this.events = this.af.database.list('/events');
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], MyEventContainerComponent.prototype, "searchText", void 0);
                MyEventContainerComponent = __decorate([
                    core_1.Component({
                        moduleId: __moduleName,
                        selector: 'my-event-container',
                        templateUrl: 'my-event-container.component.html',
                        styleUrls: ['my-event-container.component.css'],
                        directives: [my_tile_1.MyTileComponent],
                        inputs: ['eventId', 'searchText'],
                        pipes: [search_pipe_1.Search]
                    }), 
                    __metadata('design:paramtypes', [angularfire2_1.AngularFire, router_1.Router])
                ], MyEventContainerComponent);
                return MyEventContainerComponent;
            }());
            exports_1("MyEventContainerComponent", MyEventContainerComponent);
        }
    }
});
//# sourceMappingURL=my-event-container.component.js.map