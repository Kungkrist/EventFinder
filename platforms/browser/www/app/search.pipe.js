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
var Search = (function () {
    function Search() {
    }
    Search.prototype.transform = function (value, term) {
        return value.map(function (items) {
            // Filtered array of names
            var arr = items.filter(function (item) { return item.name.toLocaleLowerCase().includes(term); });
            // Filtered array of info
            var arr2 = items.filter(function (item) { return item.info.toLocaleLowerCase().includes(term); });
            // Adds the two arrays togheter and removes duplicates
            var result = arr.concat(arr2.filter(function (item) {
                return arr.indexOf(item) < 0;
            }));
            return result.length > 0 ? result : ["no-events"];
        });
    };
    Search = __decorate([
        core_1.Pipe({
            name: 'search'
        }), 
        __metadata('design:paramtypes', [])
    ], Search);
    return Search;
}());
exports.Search = Search;
//# sourceMappingURL=/Users/iths/Documents/VS code projects/EventFinder/tmp/broccoli_type_script_compiler-input_base_path-1fYFoSrg.tmp/0/app/search.pipe.js.map