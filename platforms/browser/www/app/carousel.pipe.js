System.register(['angular2/core', './date-handler.service'], function(exports_1, context_1) {
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
    var core_1, date_handler_service_1;
    var Carousel;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (date_handler_service_1_1) {
                date_handler_service_1 = date_handler_service_1_1;
            }],
        execute: function() {
            Carousel = (function () {
                function Carousel() {
                }
                Carousel.prototype.transform = function (value, term) {
                    var dateHandler = new date_handler_service_1.DateHandlerService();
                    return value.map(function (items) {
                        // Filtered array of names
                        var arr = items.filter(function (item) {
                            console.log(item.date === dateHandler.getDate());
                            if (item.date === dateHandler.getDate()) {
                                console.log(item);
                                return item;
                            }
                            // return item.date === dateHandler.getDate();
                        });
                        return arr;
                        // Adds the two arrays togheter and removes duplicates
                    });
                };
                Carousel = __decorate([
                    core_1.Pipe({
                        name: 'carousel'
                    }), 
                    __metadata('design:paramtypes', [])
                ], Carousel);
                return Carousel;
            }());
            exports_1("Carousel", Carousel);
        }
    }
});
//# sourceMappingURL=carousel.pipe.js.map