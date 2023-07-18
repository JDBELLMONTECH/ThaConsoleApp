import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceholderComponentComponent } from './placeholder-component.component';

describe('PlaceholderComponentComponent', () => {
  let component: PlaceholderComponentComponent;
  let fixture: ComponentFixture<PlaceholderComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlaceholderComponentComponent]
    });
    fixture = TestBed.createComponent(PlaceholderComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
