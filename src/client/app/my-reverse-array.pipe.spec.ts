import {
  it,
  iit,
  describe,
  ddescribe,
  expect,
  inject,
  injectAsync,
  TestComponentBuilder,
  beforeEachProviders
} from 'angular2/testing';
import {provide} from 'angular2/core';
import {MyReverseArray} from './my-reverse-array.pipe';

describe('MyReverseArray Pipe', () => {

  beforeEachProviders(() => [MyReverseArray]);

  it('should transform the input', inject([MyReverseArray], (pipe:MyReverseArray) => {
      expect(pipe.transform(true)).toBe(null);
  }));

});
