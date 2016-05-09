import {beforeEachProviders, it, iit, describe, ddescribe, expect, inject, injectAsync } from 'angular2/testing';
import {provide} from 'angular2/core';
import {MyEventService} from './my-event.service';

describe('MyEvent Service', () => {

  beforeEachProviders(() => [MyEventService]);
  
  it('should ...', inject([MyEventService], (service: MyEventService) => {

  }));

});
