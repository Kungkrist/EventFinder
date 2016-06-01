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
var angularfire2_1 = require('angularfire2');
var my_comment_1 = require('../my-comment');
var router_deprecated_1 = require('@angular/router-deprecated');
var router_deprecated_2 = require('@angular/router-deprecated');
var MyShowDetailsviewComponent = (function () {
    function MyShowDetailsviewComponent(af, ref, data, injector, params, router) {
        this.af = af;
        this.ref = ref;
        this.data = data;
        this.injector = injector;
        this.params = params;
        this.router = router;
        this.event = { name: "",
            date: "",
            start_time: "",
            stop_time: "",
            info: "",
            adress: "",
            comments: [""],
            price: "",
            organiser: "",
            phone: "",
            email: "",
            uid: null,
            imageURL: "" };
    }
    MyShowDetailsviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Get uid from sender
        this.params = this.injector.parent.get(router_deprecated_1.RouteParams);
        this.eventId = this.params.get('uid');
        this.ref.child('/events').child('/' + this.eventId).on("value", function (v) { return _this.event = v.val(); });
    };
    MyShowDetailsviewComponent.prototype.onClick = function (id) {
        this.router.navigate(['/My-detailview', { uid: id }]);
        return false;
    };
    // Check if the user is allowed to edit a specified event.
    MyShowDetailsviewComponent.prototype.isValid = function () {
        try {
            if (this.event.uid.includes(this.ref.getAuth().uid))
                return true;
        }
        catch (e) {
            return false;
        }
    };
    MyShowDetailsviewComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-show-detailsview',
            templateUrl: 'my-show-detailsview.component.html',
            styleUrls: ['my-show-detailsview.component.css'],
            providers: [],
            directives: [my_comment_1.MyCommentComponent],
            inputs: ['uid'],
        }),
        __param(1, core_1.Inject(angularfire2_1.FirebaseRef)), 
        __metadata('design:paramtypes', [angularfire2_1.AngularFire, Object, router_deprecated_1.RouteData, core_1.ReflectiveInjector, router_deprecated_1.RouteParams, router_deprecated_2.Router])
    ], MyShowDetailsviewComponent);
    return MyShowDetailsviewComponent;
}());
exports.MyShowDetailsviewComponent = MyShowDetailsviewComponent;
//# sourceMappingURL=/Users/iths/Documents/VS code projects/EventFinder/tmp/broccoli_type_script_compiler-input_base_path-1fYFoSrg.tmp/0/app/my-show-detailsview/my-show-detailsview.component.js.map