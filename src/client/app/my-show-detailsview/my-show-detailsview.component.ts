import {Component, OnInit} from 'angular2/core';
import {MyEventService} from '../my-event.service';
import {Event} from '../IEvent';

@Component({
  moduleId: __moduleName,
  selector: 'my-show-detailsview',
  templateUrl: 'my-show-detailsview.component.html',
  styleUrls: ['my-show-detailsview.component.css'],
  providers: [MyEventService]
})
export class MyShowDetailsviewComponent implements OnInit {

  constructor(private eventService: MyEventService) {}
  
  events = {}
  public name = "Placeholder, change to data from db"
  
  ngOnInit() {
    this.getEvents();
  }
  
  getEvents() {
    this.events = this.eventService.getEvents();
  }

}
