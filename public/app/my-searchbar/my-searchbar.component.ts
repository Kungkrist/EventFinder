import {Component, OnInit} from 'angular2/core';
import {MyEventContainerComponent} from '../my-event-container'

@Component({
  moduleId: __moduleName,
  selector: 'my-searchbar',
  templateUrl: 'my-searchbar.component.html',
  styleUrls: ['my-searchbar.component.css'],
  directives: [MyEventContainerComponent],
  inputs: ['searchText']
})
export class MySearchbarComponent implements OnInit {
  sentText = '';
  constructor() {}
  
  ngOnInit() {
  }
  
  onClick() {
    //this.sentText = this.searchText.toLocaleLowerCase();
  }

}
