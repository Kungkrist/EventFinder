import {bootstrap} from '@angular/platform-browser-dynamic';
import {enableProdMode} from '@angular/core';
import {environment} from './app/environment';
import {EventFinderApp} from './app/event-finder.component';
import 'rxjs/Rx';
import {ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {RouteConfig} from '@angular/router-deprecated';
import {MyUsersService} from './app/my-users.service';
import {MyEventsService} from './app/my-events.service';
import {
  FIREBASE_PROVIDERS, 
  defaultFirebase, 
  AngularFire, 
  firebaseAuthConfig, 
  AuthMethods, 
  AuthProviders
} from 'angularfire2/angularfire2'; 

if (environment.production) {
  enableProdMode();
}

//document.addEventListener('deviceready', () => {
  bootstrap(EventFinderApp, 
[
  FIREBASE_PROVIDERS,
  ROUTER_PROVIDERS,
  defaultFirebase('https://sizzling-heat-4438.firebaseio.com'),
  firebaseAuthConfig({
    method: AuthMethods.Redirect,
    provider: AuthProviders.Password
  }), 
  MyUsersService, 
  MyEventsService
]);
//}, false);
