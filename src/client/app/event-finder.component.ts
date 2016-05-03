import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {AngularFire} from 'angularfire2';
import {MyDemosearchComponent} from './my-demosearch';
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
  {path:'/my-demosearch', name: 'My-demosearch', component: MyDemosearchComponent, useAsDefault: true}
])

export class EventFinderApp {
  constructor(private _af: AngularFire) {}
}
