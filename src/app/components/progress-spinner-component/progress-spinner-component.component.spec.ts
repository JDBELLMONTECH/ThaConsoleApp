import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressSpinnerComponentComponent } from './progress-spinner-component.component';

describe('ProgressSpinnerComponentComponent', () => {
  let component: ProgressSpinnerComponentComponent;
  let fixture: ComponentFixture<ProgressSpinnerComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProgressSpinnerComponentComponent]
    });
    fixture = TestBed.createComponent(ProgressSpinnerComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
