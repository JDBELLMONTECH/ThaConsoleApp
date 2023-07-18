import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnouncementsPageComponent } from './announcements-page.component';

describe('AnnouncementsPageComponent', () => {
  let component: AnnouncementsPageComponent;
  let fixture: ComponentFixture<AnnouncementsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnnouncementsPageComponent]
    });
    fixture = TestBed.createComponent(AnnouncementsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
