import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorDisplayComponentComponent } from './error-display-component.component';

describe('ErrorDisplayComponentComponent', () => {
  let component: ErrorDisplayComponentComponent;
  let fixture: ComponentFixture<ErrorDisplayComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ErrorDisplayComponentComponent]
    });
    fixture = TestBed.createComponent(ErrorDisplayComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
