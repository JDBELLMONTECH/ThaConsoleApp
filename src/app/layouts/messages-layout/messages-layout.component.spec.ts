import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesLayoutComponent } from './messages-layout.component';

describe('MessagesLayoutComponent', () => {
  let component: MessagesLayoutComponent;
  let fixture: ComponentFixture<MessagesLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MessagesLayoutComponent]
    });
    fixture = TestBed.createComponent(MessagesLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
