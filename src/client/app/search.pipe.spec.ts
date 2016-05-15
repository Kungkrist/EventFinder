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
import {Search} from './search.pipe';

describe('Search Pipe', () => {

  beforeEachProviders(() => [Search]);

  it('should transform the input', inject([Search], (pipe:Search) => {
      expect(pipe.transform(true)).toBe(null);
  }));

});
