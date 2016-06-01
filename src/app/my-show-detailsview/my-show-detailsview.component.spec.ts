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
import {MyShowDetailsviewComponent} from './my-show-detailsview.component';

describe('MyShowDetailsview Component', () => {

  beforeEachProviders((): any[] => []);

  it('should ...', injectAsync([TestComponentBuilder], (tcb:TestComponentBuilder) => {
    return tcb.createAsync(MyShowDetailsviewComponent).then((fixture: ComponentFixture<any>) => {
      fixture.detectChanges();
    });
  }));

});
