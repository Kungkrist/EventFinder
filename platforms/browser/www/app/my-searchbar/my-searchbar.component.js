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
var my_event_container_1 = require('../my-event-container');
var MySearchbarComponent = (function () {
    function MySearchbarComponent() {
        this.sentText = '';
    }
    MySearchbarComponent.prototype.ngOnInit = function () {
    };
    MySearchbarComponent.prototype.onClick = function () {
        //this.sentText = this.searchText.toLocaleLowerCase();
    };
    MySearchbarComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-searchbar',
            templateUrl: 'my-searchbar.component.html',
            styleUrls: ['my-searchbar.component.css'],
            directives: [my_event_container_1.MyEventContainerComponent],
            inputs: ['searchText']
        }), 
        __metadata('design:paramtypes', [])
    ], MySearchbarComponent);
    return MySearchbarComponent;
}());
exports.MySearchbarComponent = MySearchbarComponent;
//# sourceMappingURL=/Users/iths/Documents/VS code projects/EventFinder/tmp/broccoli_type_script_compiler-input_base_path-1fYFoSrg.tmp/0/app/my-searchbar/my-searchbar.component.js.map