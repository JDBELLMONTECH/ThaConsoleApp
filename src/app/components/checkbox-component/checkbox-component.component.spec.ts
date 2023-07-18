import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxComponentComponent } from './checkbox-component.component';

describe('CheckboxComponentComponent', () => {
  let component: CheckboxComponentComponent;
  let fixture: ComponentFixture<CheckboxComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckboxComponentComponent]
    });
    fixture = TestBed.createComponent(CheckboxComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
