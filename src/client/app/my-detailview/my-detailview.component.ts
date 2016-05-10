import {Component, OnInit, Inject, Injector} from 'angular2/core';
import {MyEventService} from '../my-event.service';
import {Event, FullEvent} from '../IEvent';
import {AngularFire, FirebaseListObservable, FirebaseObjectObservable, FirebaseRef} from 'angularfire2';
import {MyCommentComponent} from '../my-comment';
import {RouteData, RouteParams, OnActivate, ComponentInstruction, CanActivate} from 'angular2/router';
import {Http} from 'angular2/http';

@Component({
  moduleId: __moduleName,
  selector: 'my-detailview',
  templateUrl: 'my-detailview.component.html',
  styleUrls: ['my-detailview.component.css'],
  providers: [MyEventService],
  directives: [MyCommentComponent],
  inputs: ['comments']
})
//@CanActivate(() => tokenNotExpired())
export class MyDetailviewComponent implements OnInit {
//Auto-gen = MyDetailviewComponent - kolla om det gör något.

  constructor( @Inject(FirebaseRef) public ref:Firebase, public data: RouteData, public injector: Injector, public params: RouteParams) {
  }
  event: FullEvent = {name: "",
  date: "",
  start_time: "",
  stop_time: "",
  info: "",
  adress: "", 
  comments: [""],
  price: "",
  organiser: "",
  phone: "",
  email: ""}//FirebaseObjectObservable<Event>
  
  //public name = "Placeholder, change to data from db"
  eventId = "/event0"
  
  ngOnInit() {
    this.getEvents();
    // Get uid from sender
    this.params = this.injector.parent.get(RouteParams);
    this.eventId = this.params.get('uid');
    console.log(this.eventId);
    this.ref.child('/events').child('/'+this.eventId).on("value", (v) => this.event = v.val());
    
  }
  
  getEvents() {
    
  }
  
  save(){
    console.log(this.event);
    var x : FullEvent = this.event
    this.ref.child('/events').child(this.eventId).update(x);
  }
  
  addComment() {
    //Save comment to Event
    //this.ref.child('/events').child(eventId).child('comments')
  }
  
}