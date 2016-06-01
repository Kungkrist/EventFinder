import {
  beforeEachProviders,
  describe,
  ddescribe,
  expect,
  iit,
  it,
  inject,
  injectAsync
} from '@angular/core/testing';
import {TestComponentBuilder, ComponentFixture} from  '@angular/compiler/testing';
import {provide} from '@angular/core';
import {MyUserEventsComponent} from './my-user-events.component';

describe('MyUserEvents Component', () => {

  beforeEachProviders((): any[] => []);

  it('should ...', injectAsync([TestComponentBuilder], (tcb:TestComponentBuilder) => {
    return tcb.createAsync(MyUserEventsComponent).then((fixture: ComponentFixture<any>) => {
      fixture.detectChanges();
    });
  }));

});
