System.register(['angular2/core', 'angularfire2', '../my-reverse-array.pipe', '../date-handler.service'], function(exports_1, context_1) {
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
    var core_1, angularfire2_1, my_reverse_array_pipe_1, date_handler_service_1;
    var MyCommentComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (angularfire2_1_1) {
                angularfire2_1 = angularfire2_1_1;
            },
            function (my_reverse_array_pipe_1_1) {
                my_reverse_array_pipe_1 = my_reverse_array_pipe_1_1;
            },
            function (date_handler_service_1_1) {
                date_handler_service_1 = date_handler_service_1_1;
            }],
        execute: function() {
            MyCommentComponent = (function () {
                function MyCommentComponent(dateHandlerService, ref, injector) {
                    this.dateHandlerService = dateHandlerService;
                    this.ref = ref;
                    this.injector = injector;
                    this.commentText = "";
                }
                MyCommentComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    //  this._mcs.getComments().(r => this.comments = r);
                    this.ref.child('/events').child('/' + this.uid).child('/comments').on("value", function (v) { return _this.comments = v.val(); });
                };
                MyCommentComponent.prototype.commentsCount = function () {
                    if (this.comments != null || this.comments != undefined) {
                        return this.comments.length;
                    }
                    this.comments = [];
                    return 0;
                };
                MyCommentComponent.prototype.postComment = function () {
                    var _this = this;
                    var text = this.commentText;
                    var date = this.dateHandlerService.getDate();
                    var time = this.dateHandlerService.getTime();
                    var comment = {
                        username: "Anonym",
                        time: time,
                        date: date,
                        text: text
                    };
                    if (this.isInputValid(text)) {
                        if (this.ref.getAuth()) {
                            // Get the username of the logged in user.
                            this.ref.child('/users/' + this.ref.getAuth().uid).once('value', function (user) {
                                comment.username = user.val().username;
                                _this.ref.child('/events').child('/' + _this.uid).child('/comments/' + _this.comments.length).update(comment);
                                _this.commentText = "";
                                return false;
                            });
                        }
                        else {
                            if (text === '') {
                                console.log("String is empty");
                                return false;
                            }
                            if (/^ +$/.test(text) === true) {
                                console.log("Whitespaces in text");
                                return false;
                            }
                            this.ref.child('/events').child('/' + this.uid).child('/comments/' + this.comments.length).update(comment);
                            this.commentText = "";
                            return false;
                        }
                    }
                };
                //Returns true if text in commentfield is valid.
                MyCommentComponent.prototype.isInputValid = function (text) {
                    if (text === '') {
                        console.log("String is empty");
                        return false;
                    }
                    if (/^ +$/.test(text) === true) {
                        console.log("Whitespaces in text");
                        return false;
                    }
                    return true;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], MyCommentComponent.prototype, "uid", void 0);
                MyCommentComponent = __decorate([
                    core_1.Component({
                        moduleId: __moduleName,
                        selector: 'my-comment',
                        templateUrl: 'my-comment.component.html',
                        styleUrls: ['my-comment.component.css'],
                        providers: [date_handler_service_1.DateHandlerService],
                        pipes: [my_reverse_array_pipe_1.MyReverseArray]
                    }),
                    __param(1, core_1.Inject(angularfire2_1.FirebaseRef)), 
                    __metadata('design:paramtypes', [date_handler_service_1.DateHandlerService, Firebase, core_1.Injector])
                ], MyCommentComponent);
                return MyCommentComponent;
            }());
            exports_1("MyCommentComponent", MyCommentComponent);
        }
    }
});
//# sourceMappingURL=my-comment.component.js.map