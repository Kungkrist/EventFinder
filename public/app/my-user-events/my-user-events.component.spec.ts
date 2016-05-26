import {
  beforeEachProviders,
  describe,
  ddescribe,
  expect,
  iit,
  it,
  inject,
  injectAsync,
  ComponentFixture,
  TestComponentBuilder
} from 'angular2/testing';
import {provide} from 'angular2/core';
import {MyUserEventsComponent} from './my-user-events.component';

describe('MyUserEvents Component', () => {

  beforeEachProviders((): any[] => []);

  it('should ...', injectAsync([TestComponentBuilder], (tcb:TestComponentBuilder) => {
    return tcb.createAsync(MyUserEventsComponent).then((fixture: ComponentFixture) => {
      fixture.detectChanges();
    });
  }));

});
