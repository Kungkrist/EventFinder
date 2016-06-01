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
import {MyEventsService} from './my-events.service';

describe('MyEvents Service', () => {

  beforeEachProviders(() => [MyEventsService]);
  
  it('should ...', inject([MyEventsService], (service: MyEventsService) => {

  }));

});
