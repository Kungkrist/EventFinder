import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {AngularFire} from 'angularfire2';
import {MyMainComponent} from './my-main';
import {MyDemosearchComponent} from './my-demosearch';
import {MyDetailviewComponent} from './my-detailview';
import {MyShowDetailsviewComponent} from './my-show-detailsview';

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

  {path:'/home', name: 'Home', component: MyMainComponent, useAsDefault: true},
  {path:'/my-demosearch', name: 'My-demosearch', component: MyDemosearchComponent},
  {path:'/my-detailview', name: 'My-detailview', component: MyDetailviewComponent},
  {path:'/my-show-detailsview', name: 'My-show-detailsview', component: MyShowDetailsviewComponent},
  {path: '/*path', component: MyMainComponent}
])

export class EventFinderApp {
  constructor(private _af: AngularFire) {}
}
