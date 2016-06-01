import {Component, OnInit, Inject, Input, NgZone} from '@angular/core';
import {Event, FullEvent} from '../IEvent';
import {AngularFire, FirebaseListObservable, FirebaseRef} from 'angularfire2';
import {MyEventsService} from '../my-events.service';

@Component({
  moduleId: module.id,
  selector: 'my-tile',
  templateUrl: 'my-tile.component.html',
  styleUrls: ['my-tile.component.css'],
  providers: [MyEventsService]
})
export class MyTileComponent implements OnInit {
  @Input () eventId;
  constructor(public das: MyEventsService, private _ngZone: NgZone) {}
  
  event = {};
    
  ngOnInit() {
    
   this.das.getEvent(this.eventId).then(result => {
     this._ngZone.run(() => {
       this.event = result;
     });
     
   });
    
  }
}

