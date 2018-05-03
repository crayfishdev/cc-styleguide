import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UxdComponentCategoriesComponent } from './uxd-component-categories.component';

describe('UxdComponentCategoriesComponent', () => {
  let component: UxdComponentCategoriesComponent;
  let fixture: ComponentFixture<UxdComponentCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UxdComponentCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UxdComponentCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
