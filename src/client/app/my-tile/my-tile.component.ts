import {Component, OnInit} from 'angular2/core';
import {MyEventService} from '../my-event.service';
import {Event} from '../IEvent';

@Component({
  moduleId: __moduleName,
  selector: 'my-tile',
  templateUrl: 'my-tile.component.html',
  styleUrls: ['my-tile.component.css'],
  providers: [MyEventService]
})
export class MyTileComponent implements OnInit {

  constructor(private eventService: MyEventService) {}
  
 event:Event = {name: "string",
  date: "string",
  timeStart: "string",
  timeEnd: "string",
  description: "string",
  place: "string"};
  
  ngOnInit() {
    this.getEvents();
  }
  
  getEvents() {
    this.event = this.eventService.getEvents();
  }

}
