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
import {MyUsersService} from './my-users.service';

describe('MyUsers Service', () => {

  beforeEachProviders(() => [MyUsersService]);
  
  it('should ...', inject([MyUsersService], (service: MyUsersService) => {

  }));

});
