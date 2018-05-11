import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UxdStyleDetailComponent } from './uxd-style-detail.component';

describe('UxdStyleDetailComponent', () => {
  let component: UxdStyleDetailComponent;
  let fixture: ComponentFixture<UxdStyleDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UxdStyleDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UxdStyleDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
