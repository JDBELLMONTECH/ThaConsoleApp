import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipsComponentComponent } from './chips-component.component';

describe('ChipsComponentComponent', () => {
  let component: ChipsComponentComponent;
  let fixture: ComponentFixture<ChipsComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChipsComponentComponent]
    });
    fixture = TestBed.createComponent(ChipsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
