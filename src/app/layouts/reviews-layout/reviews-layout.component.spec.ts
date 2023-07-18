import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewsLayoutComponent } from './reviews-layout.component';

describe('ReviewsLayoutComponent', () => {
  let component: ReviewsLayoutComponent;
  let fixture: ComponentFixture<ReviewsLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReviewsLayoutComponent]
    });
    fixture = TestBed.createComponent(ReviewsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
