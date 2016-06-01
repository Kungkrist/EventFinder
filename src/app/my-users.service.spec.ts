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
import {MyUsersService} from './my-users.service';

describe('MyUsers Service', () => {

  beforeEachProviders(() => [MyUsersService]);
  
  it('should ...', inject([MyUsersService], (service: MyUsersService) => {

  }));

});
