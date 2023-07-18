import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingSpinnerComponentComponent } from './loading-spinner-component.component';

describe('LoadingSpinnerComponentComponent', () => {
  let component: LoadingSpinnerComponentComponent;
  let fixture: ComponentFixture<LoadingSpinnerComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoadingSpinnerComponentComponent]
    });
    fixture = TestBed.createComponent(LoadingSpinnerComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
