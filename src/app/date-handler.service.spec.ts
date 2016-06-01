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
import {DateHandlerService} from './date-handler.service';

describe('DateHandler Service', () => {

  beforeEachProviders(() => [DateHandlerService]);
  
  it('should ...', inject([DateHandlerService], (service: DateHandlerService) => {

  }));

});
