import {Component, OnInit, Input} from 'angular2/core';
import {EventDataService} from '../event-data.service';
import {MyTileComponent} from  '../my-tile';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Router} from 'angular2/router';
import {Search} from '../search.pipe';

@Component({
  moduleId: __moduleName,
  selector: 'my-event-container',
  templateUrl: 'my-event-container.component.html',
  styleUrls: ['my-event-container.component.css'],
  directives: [MyTileComponent],
  inputs: ['eventId', 'searchText'],
  pipes: [Search]
})
export class MyEventContainerComponent implements OnInit {
  @Input() searchText;
  events: FirebaseListObservable <any []>;
  
  onClick(id) {
    this.router.navigate(['/My-show-detailsview', { uid: id }]);
  }
  
  constructor(public af: AngularFire, private router: Router) {}
  
  ngOnInit() {
    this.events = this.af.database.list('/events');
  }

}
