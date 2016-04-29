import {bootstrap} from 'angular2/platform/browser';
import {enableProdMode} from 'angular2/core';
import {environment} from './app/environment';
import {EventFinderApp} from './app/event-finder.component';

if (environment.production) {
  enableProdMode();
}

bootstrap(EventFinderApp);
