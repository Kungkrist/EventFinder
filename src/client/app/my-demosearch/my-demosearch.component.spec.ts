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
import {MyDemosearchComponent} from './my-demosearch.component';

describe('MyDemosearch Component', () => {

  beforeEachProviders((): any[] => []);

  it('should ...', injectAsync([TestComponentBuilder], (tcb:TestComponentBuilder) => {
    return tcb.createAsync(MyDemosearchComponent).then((fixture: ComponentFixture) => {
      fixture.detectChanges();
    });
  }));

});
