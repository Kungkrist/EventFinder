import {bootstrap} from 'angular2/platform/browser';
import {enableProdMode} from 'angular2/core';
import {environment} from './app/environment';
import {EventFinderApp} from './app/event-finder.component';
import {FIREBASE_PROVIDERS, defaultFirebase, AngularFire} from 'angularfire2/angularfire2';
import 'rxjs/Rx';
import {ROUTER_PROVIDERS} from 'angular2/router';

if (environment.production) {
  enableProdMode();
}

bootstrap(EventFinderApp, [
  FIREBASE_PROVIDERS,
  ROUTER_PROVIDERS,
  defaultFirebase('https://sizzling-heat-4438.firebaseio.com')
]);
