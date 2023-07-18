import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityFeedPageComponent } from './activity-feed-page.component';

describe('ActivityFeedPageComponent', () => {
  let component: ActivityFeedPageComponent;
  let fixture: ComponentFixture<ActivityFeedPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActivityFeedPageComponent]
    });
    fixture = TestBed.createComponent(ActivityFeedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
