System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var DateHandlerService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            DateHandlerService = (function () {
                function DateHandlerService() {
                }
                DateHandlerService.prototype.getDate = function () {
                    var date = new Date().toLocaleDateString();
                    return date;
                };
                DateHandlerService.prototype.getTime = function () {
                    var date = new Date();
                    var h = date.getHours();
                    var m = date.getMinutes();
                    var time;
                    if (m < 10) {
                        time = h + ":0" + m;
                    }
                    else {
                        time = h + ":" + m;
                    }
                    return time;
                };
                DateHandlerService.prototype.getTimeStamp = function () {
                    return Date.now();
                };
                DateHandlerService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], DateHandlerService);
                return DateHandlerService;
            }());
            exports_1("DateHandlerService", DateHandlerService);
        }
    }
});
//# sourceMappingURL=date-handler.service.js.map