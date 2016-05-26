import {Injectable, Inject, OnInit} from 'angular2/core';
import {AngularFire, FirebaseListObservable, FirebaseRef} from 'angularfire2';
import {Event, FullEvent} from './IEvent';

@Injectable()
export class MyEventsService {
  constructor(public af: AngularFire, @Inject(FirebaseRef) public ref: Firebase) {}

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
    email: "", 
    uid: null,
    imageURL: ""}
    
  getEvent(eventId){
    return new Promise(resolve => {
      this.ref.child('/events/' + eventId).on("value", (a) => {
       resolve(a.val());
     });
    });
     //return new Promise(resolve(this.event));
  }

}
 