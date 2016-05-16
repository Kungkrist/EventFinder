import {Component, OnInit, Inject, Injector} from 'angular2/core';
import {Event, FullEvent} from '../IEvent';
import {AngularFire, FirebaseListObservable, FirebaseObjectObservable, FirebaseRef} from 'angularfire2';
import {MyCommentComponent} from '../my-comment';
import {RouteData, Router, RouteParams, OnActivate, ComponentInstruction, CanActivate} from 'angular2/router';
import {Http} from 'angular2/http';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';


@Component({
  moduleId: __moduleName,
  selector: 'my-detailview',
  templateUrl: 'my-detailview.component.html',
  styleUrls: ['my-detailview.component.css'],
  providers: [],
  directives: [MyCommentComponent],
  inputs: ['comments']
})
//@CanActivate(() => tokenNotExpired())
export class MyDetailviewComponent implements OnInit {
//Auto-gen = MyDetailviewComponent - kolla om det gör något.

  constructor( @Inject(FirebaseRef) public ref:Firebase, public data: RouteData, public injector: Injector, public params: RouteParams, private router: Router, public af: AngularFire) {
  }
  event: FullEvent = {name: "",
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
                      uid: null}
  
  //public name = "Placeholder, change to data from db"
  eventId = ""
  newEvent = false
  ngOnInit() {
    this.getEvents();
    // Get uid from sender
    this.params = this.injector.parent.get(RouteParams);
    this.eventId = this.params.get('uid');

    if (this.eventId==="") {
      console.log("empty " + this.eventId);
      this.newEvent = true;  
    }else {
      console.log("set " + this.eventId);
      this.ref.child('/events').child('/'+this.eventId).on("value", (v) => this.event = v.val());
    }
    
  }
  
  getEvents() {
    
  }
  

  save(eid){
    var x : FullEvent = this.event
    if (!this.checkValue()) {
      alert("Fyll i alla fält!")
      return false
    }
    
    // If the user is creating a new event.
    if (this.newEvent) {
      this.ref.child('/events/').once('value', a => {
        var length = Object.keys(a.val()).filter( items => items.includes(this.ref.getAuth().uid)).length;       
        x.uid = this.ref.getAuth().uid + '-' + length;
        var newRef = this.ref.child('/events/' + this.ref.getAuth().uid + '-' + length).update(x);
        this.router.navigate(['/UserEvents']);
        return false;
      });
     
    }else {
      this.ref.child('/events').child(this.eventId).update(x);
      this.router.navigate(['/My-show-detailsview', { uid: x.uid }]);
      return false;
    }
    //console.log(this.event);
    
  }
  
  checkValue() {
    console.log("inside checkValue")
    var newEvent = {name: this.event.name,
                    date: this.event.date,
                    start_time: this.event.start_time,
                    stop_time: this.event.stop_time,
                    info: this.event.info,
                    adress: this.event.adress, 
                    comments: [null],
                    price: this.event.price,
                    organiser: this.event.organiser,
                    phone: this.event.phone,
                    email: this.event.email}
    for (var i in newEvent) {
      if(newEvent[i] === "" || newEvent[i] === undefined) {
        return false
      }
    }
    return true
  }
  
  delete() {
    alert('ARE YOU SURE?');
     this.ref.child('/events/').child(this.eventId).remove();
     this.router.navigate(['/Home']);
     return false;
  }
  
  cancel() {
    var x : FullEvent = this.event
    this.router.navigate(['/My-show-detailsview', {uid: x.uid}]);
    return false;
  }
  
  addComment() {
    //Save comment to Event
    //this.ref.child('/events').child(eventId).child('comments')
  }
  
}