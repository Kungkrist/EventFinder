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
import {MyCreateAccountComponent} from './my-create-account.component';

describe('MyCreateAccount Component', () => {

  beforeEachProviders((): any[] => []);

  it('should ...', injectAsync([TestComponentBuilder], (tcb:TestComponentBuilder) => {
    return tcb.createAsync(MyCreateAccountComponent).then((fixture: ComponentFixture<any>) => {
      fixture.detectChanges();
    });
  }));

});
