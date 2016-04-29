import {describe, it, expect, beforeEachProviders, inject} from 'angular2/testing';
import {EventFinderApp} from '../app/event-finder.component';

beforeEachProviders(() => [EventFinderApp]);

describe('App: EventFinder', () => {
  it('should have the `defaultMeaning` as 42', inject([EventFinderApp], (app: EventFinderApp) => {
    expect(app.defaultMeaning).toBe(42);
  }));

  describe('#meaningOfLife', () => {
    it('should get the meaning of life', inject([EventFinderApp], (app: EventFinderApp) => {
      expect(app.meaningOfLife()).toBe('The meaning of life is 42');
      expect(app.meaningOfLife(22)).toBe('The meaning of life is 22');
    }));
  });
});

