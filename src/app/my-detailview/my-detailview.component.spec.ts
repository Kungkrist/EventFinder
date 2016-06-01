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
import {MyDetailviewComponent} from './my-detailview.component';

describe('MyDetailview Component', () => {

  beforeEachProviders((): any[] => []);

  it('should ...', injectAsync([TestComponentBuilder], (tcb:TestComponentBuilder) => {
    return tcb.createAsync(MyDetailviewComponent).then((fixture: ComponentFixture<any>) => {
      fixture.detectChanges();
    });
  }));

});
