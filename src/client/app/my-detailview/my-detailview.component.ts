import {Component, OnInit} from 'angular2/core';
import {MyEventService} from '../my-event.service';
import {Event} from '../IEvent';

@Component({
  moduleId: __moduleName,
  selector: 'my-detailview',
  templateUrl: 'my-detailview.component.html',
  styleUrls: ['my-detailview.component.css'],
  providers: [MyEventService]
})
export class MyDetailviewComponent implements OnInit {
//Auto-gen = MyDetailviewComponent - kolla om det gör något.

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