System.register(['angular2/core', '../my-event-container', '../my-carousel', '../my-searchbar'], function(exports_1, context_1) {
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
    var core_1, my_event_container_1, my_carousel_1, my_searchbar_1;
    var MyMainComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (my_event_container_1_1) {
                my_event_container_1 = my_event_container_1_1;
            },
            function (my_carousel_1_1) {
                my_carousel_1 = my_carousel_1_1;
            },
            function (my_searchbar_1_1) {
                my_searchbar_1 = my_searchbar_1_1;
            }],
        execute: function() {
            MyMainComponent = (function () {
                function MyMainComponent() {
                }
                MyMainComponent.prototype.ngOnInit = function () {
                };
                MyMainComponent = __decorate([
                    core_1.Component({
                        moduleId: __moduleName,
                        selector: 'my-main',
                        templateUrl: 'my-main.component.html',
                        styleUrls: ['my-main.component.css'],
                        directives: [my_event_container_1.MyEventContainerComponent, my_carousel_1.MyCarouselComponent, my_searchbar_1.MySearchbarComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], MyMainComponent);
                return MyMainComponent;
            }());
            exports_1("MyMainComponent", MyMainComponent);
        }
    }
});
//# sourceMappingURL=my-main.component.js.map