import {Component, OnInit} from 'angular2/core';
import {EventDataService} from '../event-data.service';
import {MyTileComponent} from  '../my-tile';
import {AngularFire, FirebaseListObservable} from 'angularfire2';

@Component({
  moduleId: __moduleName,
  selector: 'my-event-container',
  templateUrl: 'my-event-container.component.html',
  styleUrls: ['my-event-container.component.css'],
  directives: [MyTileComponent]
})
export class MyEventContainerComponent implements OnInit {
  
  events: FirebaseListObservable <any []>;
  
  
  constructor(public af: AngularFire) {}
  
  ngOnInit() {
    this.events = this.af.database.list('/events')
  }

}
