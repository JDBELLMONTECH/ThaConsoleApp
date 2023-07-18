import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollspyComponentComponent } from './scrollspy-component.component';

describe('ScrollspyComponentComponent', () => {
  let component: ScrollspyComponentComponent;
  let fixture: ComponentFixture<ScrollspyComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScrollspyComponentComponent]
    });
    fixture = TestBed.createComponent(ScrollspyComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
