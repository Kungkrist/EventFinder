import {Component, OnInit} from 'angular2/core';
import {MockDetailComponent} from '../mock-detail/mock-detail.component'

@Component({
  moduleId: __moduleName,
  selector: 'my-main',
  templateUrl: 'my-main.component.html',
  styleUrls: ['my-main.component.css'],
  directives: [MockDetailComponent]
})
export class MyMainComponent implements OnInit {

  constructor() {}
  
  ngOnInit() {
  }

}
