import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DividerComponentComponent } from './divider-component.component';

describe('DividerComponentComponent', () => {
  let component: DividerComponentComponent;
  let fixture: ComponentFixture<DividerComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DividerComponentComponent]
    });
    fixture = TestBed.createComponent(DividerComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
