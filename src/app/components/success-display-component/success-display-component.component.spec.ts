import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessDisplayComponentComponent } from './success-display-component.component';

describe('SuccessDisplayComponentComponent', () => {
  let component: SuccessDisplayComponentComponent;
  let fixture: ComponentFixture<SuccessDisplayComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuccessDisplayComponentComponent]
    });
    fixture = TestBed.createComponent(SuccessDisplayComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
