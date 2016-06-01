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
var core_1 = require('@angular/core');
var my_tile_1 = require('../my-tile');
var angularfire2_1 = require('angularfire2');
var router_deprecated_1 = require('@angular/router-deprecated');
var search_pipe_1 = require('../search.pipe');
var MyEventContainerComponent = (function () {
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
            moduleId: module.id,
            selector: 'my-event-container',
            templateUrl: 'my-event-container.component.html',
            styleUrls: ['my-event-container.component.css'],
            directives: [my_tile_1.MyTileComponent],
            inputs: ['eventId', 'searchText'],
            pipes: [search_pipe_1.Search]
        }), 
        __metadata('design:paramtypes', [angularfire2_1.AngularFire, router_deprecated_1.Router])
    ], MyEventContainerComponent);
    return MyEventContainerComponent;
}());
exports.MyEventContainerComponent = MyEventContainerComponent;
//# sourceMappingURL=/Users/iths/Documents/VS code projects/EventFinder/tmp/broccoli_type_script_compiler-input_base_path-1fYFoSrg.tmp/0/app/my-event-container/my-event-container.component.js.map