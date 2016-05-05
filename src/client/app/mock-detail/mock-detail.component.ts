import {Component, OnInit} from 'angular2/core';
import {MyCommentComponent} from '../my-comment'

@Component({
  moduleId: __moduleName,
  selector: 'mock-detail',
  templateUrl: 'mock-detail.component.html',
  styleUrls: ['mock-detail.component.css'],
  directives: [MyCommentComponent]
})
export class MockDetailComponent implements OnInit {

  constructor() {}
  
  ngOnInit() {
  }

}
