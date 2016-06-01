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
var common_1 = require('@angular/common');
var ng2_bootstrap_1 = require('ng2-bootstrap/ng2-bootstrap');
var angularfire2_1 = require('angularfire2/angularfire2');
var carousel_pipe_1 = require('../carousel.pipe');
var router_deprecated_1 = require('@angular/router-deprecated');
var MyCarouselComponent = (function () {
    function MyCarouselComponent(af, _ref, router) {
        this.af = af;
        this._ref = _ref;
        this.router = router;
        this.myInterval = 5000;
        this.noWrapSlides = false;
    }
    MyCarouselComponent.prototype.ngOnInit = function () {
        this.slides = this.af.database.list('/events');
    };
    MyCarouselComponent.prototype.onClicked = function (id) {
        console.log("Klickad");
        this.router.navigate(['/My-show-detailsview', { uid: id }]);
    };
    MyCarouselComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-carousel',
            directives: [ng2_bootstrap_1.CAROUSEL_DIRECTIVES, common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES],
            templateUrl: 'my-carousel.component.html',
            styleUrls: ['my-carousel.component.css'],
            pipes: [carousel_pipe_1.Carousel]
        }),
        __param(1, core_1.Inject(angularfire2_1.FirebaseRef)), 
        __metadata('design:paramtypes', [angularfire2_1.AngularFire, Object, router_deprecated_1.Router])
    ], MyCarouselComponent);
    return MyCarouselComponent;
}());
exports.MyCarouselComponent = MyCarouselComponent;
//# sourceMappingURL=/Users/iths/Documents/VS code projects/EventFinder/tmp/broccoli_type_script_compiler-input_base_path-1fYFoSrg.tmp/0/app/my-carousel/my-carousel.component.js.map