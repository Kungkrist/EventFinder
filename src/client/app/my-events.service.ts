import {Injectable, Inject, OnInit} from 'angular2/core';
import {AngularFire, FirebaseListObservable, FirebaseRef} from 'angularfire2';
import {Event, FullEvent} from './IEvent';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class MyEventsService {
  constructor(public af: AngularFire, @Inject(FirebaseRef) public ref: Firebase) {}

  
  getEvent(eventId){    
    return new Promise(resolve => {
      this.ref.child('/events/' + eventId).on("value", (a) => {
       resolve(a.exportVal());
     });
    });
  }
  
  updateEvent(eventId, data) {
    return this.ref.child('/events/' + eventId).update(data);
  }

  removeEvent(eventId) {
    this.ref.child('/events/' + eventId).remove();
  }
}
 