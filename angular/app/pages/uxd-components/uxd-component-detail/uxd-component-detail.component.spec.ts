import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UxdComponentDetailComponent } from './uxd-component-detail.component';

describe('UxdComponentDetailComponent', () => {
  let component: UxdComponentDetailComponent;
  let fixture: ComponentFixture<UxdComponentDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UxdComponentDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UxdComponentDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
