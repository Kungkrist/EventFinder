import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {AngularFire} from 'angularfire2';
import {MyMainComponent} from './my-main';
@Component({
  moduleId: __moduleName,
  selector: 'event-finder-app',
  providers: [ROUTER_PROVIDERS],
  templateUrl: 'event-finder.component.html',
  styleUrls: ['event-finder.component.css'],
  directives: [ROUTER_DIRECTIVES],
  pipes: []
})
@RouteConfig([
  {path:'/home', name: 'Home', component: MyMainComponent, useAsDefault: true}
])

export class EventFinderApp {
  constructor(private _af: AngularFire) {}
}
