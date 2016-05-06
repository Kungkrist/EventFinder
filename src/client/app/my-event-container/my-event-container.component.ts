import {Component, OnInit} from 'angular2/core';
import {MockEventService} from '../mock-event.service';
import {IEvents} from '../IEvent';

@Component({
  moduleId: __moduleName,
  selector: 'my-event-container',
  templateUrl: 'my-event-container.component.html',
  styleUrls: ['my-event-container.component.css'],
  providers: [MockEventService]
})
export class MyEventContainerComponent implements OnInit {
  
  events: IEvents []

  constructor(private _mec: MockEventService) {}
  
  ngOnInit() {
    this._mec.getEvents().then(events => this.events = events);
  }

}
