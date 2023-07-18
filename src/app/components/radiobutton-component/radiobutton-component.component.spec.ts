import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadiobuttonComponentComponent } from './radiobutton-component.component';

describe('RadiobuttonComponentComponent', () => {
  let component: RadiobuttonComponentComponent;
  let fixture: ComponentFixture<RadiobuttonComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RadiobuttonComponentComponent]
    });
    fixture = TestBed.createComponent(RadiobuttonComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
