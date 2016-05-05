/// <reference path="../../../typings/browser.d.ts" />
import {Injectable} from 'angular2/core';
import {COMMENTS} from './mock-comments';

@Injectable()
export class MyCommentService {
  constructor() {}

  getComments() {
    return Promise.resolve(COMMENTS);
  }
}
