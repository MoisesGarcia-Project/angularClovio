import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyLoadedModuleComponent } from './lazy-loaded-module.component';

describe('LazyLoadedModuleComponent', () => {
  let component: LazyLoadedModuleComponent;
  let fixture: ComponentFixture<LazyLoadedModuleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LazyLoadedModuleComponent]
    });
    fixture = TestBed.createComponent(LazyLoadedModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
