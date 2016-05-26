System.register(['angular2/core', 'angular2/common', 'ng2-bootstrap/ng2-bootstrap', 'angularfire2/angularfire2', '../carousel.pipe', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, common_1, ng2_bootstrap_1, angularfire2_1, carousel_pipe_1, router_1;
    var MyCarouselComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (ng2_bootstrap_1_1) {
                ng2_bootstrap_1 = ng2_bootstrap_1_1;
            },
            function (angularfire2_1_1) {
                angularfire2_1 = angularfire2_1_1;
            },
            function (carousel_pipe_1_1) {
                carousel_pipe_1 = carousel_pipe_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            MyCarouselComponent = (function () {
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
                        moduleId: __moduleName,
                        selector: 'my-carousel',
                        directives: [ng2_bootstrap_1.CAROUSEL_DIRECTIVES, common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES],
                        templateUrl: 'my-carousel.component.html',
                        styleUrls: ['my-carousel.component.css'],
                        pipes: [carousel_pipe_1.Carousel]
                    }),
                    __param(1, core_1.Inject(angularfire2_1.FirebaseRef)), 
                    __metadata('design:paramtypes', [angularfire2_1.AngularFire, Firebase, router_1.Router])
                ], MyCarouselComponent);
                return MyCarouselComponent;
            }());
            exports_1("MyCarouselComponent", MyCarouselComponent);
        }
    }
});
//# sourceMappingURL=my-carousel.component.js.map