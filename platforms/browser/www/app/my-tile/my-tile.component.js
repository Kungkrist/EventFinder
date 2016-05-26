System.register(['angular2/core', 'angularfire2'], function(exports_1, context_1) {
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
    var core_1, angularfire2_1;
    var MyTileComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (angularfire2_1_1) {
                angularfire2_1 = angularfire2_1_1;
            }],
        execute: function() {
            MyTileComponent = (function () {
                function MyTileComponent(af, ref) {
                    this.af = af;
                    this.ref = ref;
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
                MyTileComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.ref.child('/events/' + this.eventId).on("value", function (a) {
                        _this.event = a.val();
                    });
                    // this.event = this.af.database.list('/events');
                };
                MyTileComponent.prototype.checkPicture = function () {
                    /*if(this.event.imageURL !== '' && this.event.imageURL !== undefined) {
                      console.log(this.event.imageURL)
                      this.event.imageURL = 'http://i.imgur.com/jq4D5B6.png';
                      var picRef = new Firebase('');
                      picRef.once('value', (snapshot) => {
                        return snapshot.val();
                      }, err => {
                        console.log("error..." + err);
                        
                      });
                      return this.event.imageURL;
                    } else {
                      return this.event.imageURL;
                    }
                    
                   */
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], MyTileComponent.prototype, "eventId", void 0);
                MyTileComponent = __decorate([
                    core_1.Component({
                        moduleId: __moduleName,
                        selector: 'my-tile',
                        templateUrl: 'my-tile.component.html',
                        styleUrls: ['my-tile.component.css'],
                        providers: []
                    }),
                    __param(1, core_1.Inject(angularfire2_1.FirebaseRef)), 
                    __metadata('design:paramtypes', [angularfire2_1.AngularFire, Firebase])
                ], MyTileComponent);
                return MyTileComponent;
            }());
            exports_1("MyTileComponent", MyTileComponent);
        }
    }
});
//# sourceMappingURL=my-tile.component.js.map