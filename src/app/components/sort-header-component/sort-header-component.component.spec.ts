import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortHeaderComponentComponent } from './sort-header-component.component';

describe('SortHeaderComponentComponent', () => {
  let component: SortHeaderComponentComponent;
  let fixture: ComponentFixture<SortHeaderComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SortHeaderComponentComponent]
    });
    fixture = TestBed.createComponent(SortHeaderComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
