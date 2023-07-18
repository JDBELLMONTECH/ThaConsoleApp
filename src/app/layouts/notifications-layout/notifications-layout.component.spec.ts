import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationsLayoutComponent } from './notifications-layout.component';

describe('NotificationsLayoutComponent', () => {
  let component: NotificationsLayoutComponent;
  let fixture: ComponentFixture<NotificationsLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotificationsLayoutComponent]
    });
    fixture = TestBed.createComponent(NotificationsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
