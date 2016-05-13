import {Component, OnInit, Inject, Input} from 'angular2/core';
import {MyEventService} from '../my-event.service';
import {Event} from '../IEvent';
import {AngularFire, FirebaseListObservable, FirebaseRef} from 'angularfire2';

@Component({
  moduleId: __moduleName,
  selector: 'my-tile',
  templateUrl: 'my-tile.component.html',
  styleUrls: ['my-tile.component.css'],
  providers: [MyEventService]
})
export class MyTileComponent implements OnInit {
  @Input () eventId;
  constructor(public af: AngularFire, @Inject(FirebaseRef) public ref: Firebase) {}
  
  event = {};

  ngOnInit() {
    
     this.ref.child('/events/' + this.eventId).on("value", (a) => {
       this.event = a.val();
       console.log(this.event);
     });
    // this.event = this.af.database.list('/events');
  }
}

