import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UxdStyleCategoriesComponent } from './uxd-style-categories.component';

describe('UxdStyleCategoriesComponent', () => {
  let component: UxdStyleCategoriesComponent;
  let fixture: ComponentFixture<UxdStyleCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UxdStyleCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UxdStyleCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
