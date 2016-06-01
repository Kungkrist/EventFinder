import {Component, OnInit} from '@angular/core';
import {MyEventContainerComponent} from '../my-event-container'

@Component({
  moduleId: module.id,
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
