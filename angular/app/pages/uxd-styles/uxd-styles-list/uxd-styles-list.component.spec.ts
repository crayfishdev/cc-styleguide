import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UxdStylesListComponent } from './uxd-styles-list.component';

describe('UxdStylesListComponent', () => {
  let component: UxdStylesListComponent;
  let fixture: ComponentFixture<UxdStylesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UxdStylesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UxdStylesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
