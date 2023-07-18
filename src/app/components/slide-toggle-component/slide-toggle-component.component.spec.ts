import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideToggleComponentComponent } from './slide-toggle-component.component';

describe('SlideToggleComponentComponent', () => {
  let component: SlideToggleComponentComponent;
  let fixture: ComponentFixture<SlideToggleComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SlideToggleComponentComponent]
    });
    fixture = TestBed.createComponent(SlideToggleComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
