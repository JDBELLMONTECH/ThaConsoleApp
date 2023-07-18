import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormfieldComponentComponent } from './formfield-component.component';

describe('FormfieldComponentComponent', () => {
  let component: FormfieldComponentComponent;
  let fixture: ComponentFixture<FormfieldComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormfieldComponentComponent]
    });
    fixture = TestBed.createComponent(FormfieldComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
