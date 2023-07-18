import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverComponentComponent } from './popover-component.component';

describe('PopoverComponentComponent', () => {
  let component: PopoverComponentComponent;
  let fixture: ComponentFixture<PopoverComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopoverComponentComponent]
    });
    fixture = TestBed.createComponent(PopoverComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
