import {
  beforeEachProviders,
  it,
  iit,
  describe,
  ddescribe,
  expect,
  inject,
  injectAsync
} from '@angular/core/testing';
import {provide} from '@angular/core';
import {EventDataService} from './event-data.service';

describe('MockEvent Service', () => {

  beforeEachProviders(() => [EventDataService]);
  
  it('should ...', inject([EventDataService], (service: EventDataService) => {

  }));

});
