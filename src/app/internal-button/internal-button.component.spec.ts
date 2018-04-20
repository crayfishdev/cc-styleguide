import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalButtonComponent } from './internal-button.component';

describe('InternalButtonComponent', () => {
  let component: InternalButtonComponent;
  let fixture: ComponentFixture<InternalButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternalButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
