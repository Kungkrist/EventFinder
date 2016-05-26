System.register(['angular2/core', 'angularfire2', '../my-comment', 'angular2/router', '../date-handler.service'], function(exports_1, context_1) {
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
    var core_1, angularfire2_1, my_comment_1, router_1, date_handler_service_1;
    var MyDetailviewComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (angularfire2_1_1) {
                angularfire2_1 = angularfire2_1_1;
            },
            function (my_comment_1_1) {
                my_comment_1 = my_comment_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (date_handler_service_1_1) {
                date_handler_service_1 = date_handler_service_1_1;
            }],
        execute: function() {
            MyDetailviewComponent = (function () {
                //Auto-gen = MyDetailviewComponent - kolla om det gör något.
                function MyDetailviewComponent(dateHandlerService, ref, data, injector, params, router, af) {
                    this.dateHandlerService = dateHandlerService;
                    this.ref = ref;
                    this.data = data;
                    this.injector = injector;
                    this.params = params;
                    this.router = router;
                    this.af = af;
                    this.event = { name: "",
                        date: "",
                        start_time: "",
                        stop_time: "",
                        info: "",
                        adress: "",
                        comments: [null],
                        price: "",
                        organiser: "",
                        phone: "",
                        email: "",
                        uid: null,
                        imageURL: "" };
                    //public name = "Placeholder, change to data from db"
                    this.eventId = "";
                    this.newEvent = false;
                }
                MyDetailviewComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.getEvents();
                    // Get uid from sender
                    this.params = this.injector.parent.get(router_1.RouteParams);
                    this.eventId = this.params.get('uid');
                    if (this.eventId === "") {
                        console.log("empty " + this.eventId);
                        this.newEvent = true;
                    }
                    else {
                        console.log("set " + this.eventId);
                        this.ref.child('/events').child('/' + this.eventId).on("value", function (v) { return _this.event = v.val(); });
                    }
                };
                MyDetailviewComponent.prototype.getEvents = function () {
                };
                MyDetailviewComponent.prototype.save = function (eid) {
                    var x = this.event;
                    if (!this.checkValue()) {
                        alert("Fyll i alla fält!");
                        return false;
                    }
                    this.checkPicture();
                    // If the user is creating a new event.
                    if (this.newEvent) {
                        var timeStamp = this.dateHandlerService.getTimeStamp();
                        x.uid = this.ref.getAuth().uid + '-' + timeStamp;
                        var newRef = this.ref.child('/events/' + x.uid).update(x);
                        this.router.navigate(['/UserEvents']);
                        return false;
                    }
                    else {
                        this.ref.child('/events').child(this.eventId).update(x);
                        this.router.navigate(['/My-show-detailsview', { uid: x.uid }]);
                        return false;
                    }
                    //console.log(this.event);
                };
                MyDetailviewComponent.prototype.checkValue = function () {
                    console.log("inside checkValue");
                    var newEvent = { name: this.event.name,
                        date: this.event.date,
                        start_time: this.event.start_time,
                        stop_time: this.event.stop_time,
                        info: this.event.info,
                        adress: this.event.adress,
                        comments: [null],
                        price: this.event.price,
                        organiser: this.event.organiser,
                        phone: this.event.phone,
                        email: this.event.email };
                    for (var i in newEvent) {
                        if (newEvent[i] === "" || newEvent[i] === undefined) {
                            return false;
                        }
                    }
                    return true;
                };
                MyDetailviewComponent.prototype.checkPicture = function () {
                    if (this.event.imageURL === "" || this.event.imageURL === undefined) {
                        this.event.imageURL = "http://cdn.almoststill.com/wp-content/uploads/2014/11/img-placeholder-dark.jpg";
                    }
                };
                MyDetailviewComponent.prototype.delete = function () {
                    var x;
                    if (confirm("Är du säker?") == true) {
                        x = "Evenemanget raderades!";
                        this.ref.child('/events/').child(this.eventId).remove();
                        this.router.navigate(['/Home']);
                    }
                    else {
                        x = "Avbröts";
                    }
                    return false;
                };
                MyDetailviewComponent.prototype.cancel = function () {
                    var x = this.event;
                    if (!x.uid) {
                        this.router.navigate(['/UserEvents']);
                    }
                    else {
                        this.router.navigate(['/My-show-detailsview', { uid: x.uid }]);
                    }
                    return false;
                };
                MyDetailviewComponent.prototype.addComment = function () {
                    //Save comment to Event
                    //this.ref.child('/events').child(eventId).child('comments')
                };
                MyDetailviewComponent = __decorate([
                    core_1.Component({
                        moduleId: __moduleName,
                        selector: 'my-detailview',
                        templateUrl: 'my-detailview.component.html',
                        styleUrls: ['my-detailview.component.css'],
                        providers: [date_handler_service_1.DateHandlerService],
                        directives: [my_comment_1.MyCommentComponent],
                        inputs: ['comments']
                    }),
                    __param(1, core_1.Inject(angularfire2_1.FirebaseRef)), 
                    __metadata('design:paramtypes', [date_handler_service_1.DateHandlerService, Firebase, router_1.RouteData, core_1.Injector, router_1.RouteParams, router_1.Router, angularfire2_1.AngularFire])
                ], MyDetailviewComponent);
                return MyDetailviewComponent;
            }());
            exports_1("MyDetailviewComponent", MyDetailviewComponent);
        }
    }
});
//# sourceMappingURL=my-detailview.component.js.map