import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtontoggleComponentComponent } from './buttontoggle-component.component';

describe('ButtontoggleComponentComponent', () => {
  let component: ButtontoggleComponentComponent;
  let fixture: ComponentFixture<ButtontoggleComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtontoggleComponentComponent]
    });
    fixture = TestBed.createComponent(ButtontoggleComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
