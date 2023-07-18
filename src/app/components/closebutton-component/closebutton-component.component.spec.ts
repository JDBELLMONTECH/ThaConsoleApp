import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosebuttonComponentComponent } from './closebutton-component.component';

describe('ClosebuttonComponentComponent', () => {
  let component: ClosebuttonComponentComponent;
  let fixture: ComponentFixture<ClosebuttonComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClosebuttonComponentComponent]
    });
    fixture = TestBed.createComponent(ClosebuttonComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
