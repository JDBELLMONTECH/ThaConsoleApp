import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonGroupComponentComponent } from './button-group-component.component';

describe('ButtonGroupComponentComponent', () => {
  let component: ButtonGroupComponentComponent;
  let fixture: ComponentFixture<ButtonGroupComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonGroupComponentComponent]
    });
    fixture = TestBed.createComponent(ButtonGroupComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
