import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgeComponentComponent } from './badge-component.component';

describe('BadgeComponentComponent', () => {
  let component: BadgeComponentComponent;
  let fixture: ComponentFixture<BadgeComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BadgeComponentComponent]
    });
    fixture = TestBed.createComponent(BadgeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
