import {Component, OnInit, Inject} from 'angular2/core';
import {EventDataService} from '../event-data.service';
import {MyTileComponent} from  '../my-tile';
import {AngularFire, FirebaseListObservable, FirebaseRef} from 'angularfire2';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Router} from 'angular2/router';

@Component({
  moduleId: __moduleName,
  selector: 'my-user-events',
  templateUrl: 'my-user-events.component.html',
  styleUrls: ['my-user-events.component.css'],
  directives: [MyTileComponent]
})
export class MyUserEventsComponent implements OnInit {

  events: FirebaseListObservable <any []>;
  
  onClick(id) {
    this.router.navigate(['/My-show-detailsview', { uid: id }]);
  }
  
  onNewEventClick(id){
    this.router.navigate(['/My-detailview', { uid: id }]);
  }
  
  constructor(public af: AngularFire, private router: Router, @Inject(FirebaseRef) private _ref: Firebase) {}
  
  ngOnInit() {
    this.events = <FirebaseListObservable <any[]>> this.af.database.list('/events').map(events => {
      return events.filter(event => {
        return event.uid.includes(this._ref.getAuth().uid);
      });
    });
  }

}
