import {Component, OnInit} from 'angular2/core';
import {MyEventContainerComponent} from '../my-event-container';

@Component({
  moduleId: __moduleName,
  selector: 'my-main',
  templateUrl: 'my-main.component.html',
  styleUrls: ['my-main.component.css'],
  directives: [MyEventContainerComponent],
  
})
export class MyMainComponent implements OnInit {

  constructor() {}
  
  ngOnInit() {
  }

}
