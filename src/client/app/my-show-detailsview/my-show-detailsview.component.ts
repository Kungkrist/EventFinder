import {Component, OnInit} from 'angular2/core';
import {MyEventService} from '../my-event.service';
import {Event} from '../IEvent';

@Component({
  moduleId: __moduleName,
  selector: 'my-show-detailsview',
  templateUrl: 'my-show-detailsview.component.html',
  styleUrls: ['my-show-detailsview.component.css']
})
export class MyShowDetailsviewComponent implements OnInit {

  constructor() {}
  
  ngOnInit() {
  }

}
