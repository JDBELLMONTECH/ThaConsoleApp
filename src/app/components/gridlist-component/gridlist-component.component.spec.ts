import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridlistComponentComponent } from './gridlist-component.component';

describe('GridlistComponentComponent', () => {
  let component: GridlistComponentComponent;
  let fixture: ComponentFixture<GridlistComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GridlistComponentComponent]
    });
    fixture = TestBed.createComponent(GridlistComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
