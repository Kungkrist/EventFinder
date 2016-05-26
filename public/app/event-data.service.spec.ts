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
import {EventDataService} from './event-data.service';

describe('MockEvent Service', () => {

  beforeEachProviders(() => [EventDataService]);
  
  it('should ...', inject([EventDataService], (service: EventDataService) => {

  }));

});
