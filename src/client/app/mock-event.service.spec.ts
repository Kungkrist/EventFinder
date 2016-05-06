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
import {MockEventService} from './mock-event.service';

describe('MockEvent Service', () => {

  beforeEachProviders(() => [MockEventService]);
  
  it('should ...', inject([MockEventService], (service: MockEventService) => {

  }));

});
