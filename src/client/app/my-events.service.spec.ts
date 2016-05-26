import {
  beforeEachProviders,
  it,
  iit,
  describe,
  ddescribe,
  expect,
  inject,
  injectAsync
} from 'angular2/testing';
import {provide} from 'angular2/core';
import {MyEventsService} from './my-events.service';

describe('MyEvents Service', () => {

  beforeEachProviders(() => [MyEventsService]);
  
  it('should ...', inject([MyEventsService], (service: MyEventsService) => {

  }));

});
