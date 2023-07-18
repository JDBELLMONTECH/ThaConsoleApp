import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastsComponentComponent } from './toasts-component.component';

describe('ToastsComponentComponent', () => {
  let component: ToastsComponentComponent;
  let fixture: ComponentFixture<ToastsComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToastsComponentComponent]
    });
    fixture = TestBed.createComponent(ToastsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
