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
import {MySearchbarComponent} from './my-searchbar.component';

describe('MySearchbar Component', () => {

  beforeEachProviders((): any[] => []);

  it('should ...', injectAsync([TestComponentBuilder], (tcb:TestComponentBuilder) => {
    return tcb.createAsync(MySearchbarComponent).then((fixture: ComponentFixture<any>) => {
      fixture.detectChanges();
    });
  }));

});
