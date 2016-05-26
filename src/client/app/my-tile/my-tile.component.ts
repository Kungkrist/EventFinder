import {Component, OnInit, Inject, Input} from 'angular2/core';
import {Event, FullEvent} from '../IEvent';
import {AngularFire, FirebaseListObservable, FirebaseRef} from 'angularfire2';
import {MyEventsService} from '../my-events.service';

@Component({
  moduleId: __moduleName,
  selector: 'my-tile',
  templateUrl: 'my-tile.component.html',
  styleUrls: ['my-tile.component.css'],
  providers: [MyEventsService]
})
export class MyTileComponent implements OnInit {
  @Input () eventId;
  constructor(public das: MyEventsService) {}
  
  event = {};
    
  ngOnInit() {
    
   this.das.getEvent(this.eventId).then(result => {
     
     this.event = result;
   });
    
  }
}

