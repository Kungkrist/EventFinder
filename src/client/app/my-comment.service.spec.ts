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
import {MyCommentService} from './my-comment.service';

describe('MyComment Service', () => {

  beforeEachProviders(() => [MyCommentService]);
  
  it('should ...', inject([MyCommentService], (service: MyCommentService) => {

  }));

});
