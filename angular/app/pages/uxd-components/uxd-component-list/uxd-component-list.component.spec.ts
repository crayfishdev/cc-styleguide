import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UxdComponentListComponent } from './uxd-component-list.component';

describe('UxdComponentListComponent', () => {
  let component: UxdComponentListComponent;
  let fixture: ComponentFixture<UxdComponentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UxdComponentListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UxdComponentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
