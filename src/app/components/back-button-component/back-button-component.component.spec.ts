import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackButtonComponentComponent } from './back-button-component.component';

describe('BackButtonComponentComponent', () => {
  let component: BackButtonComponentComponent;
  let fixture: ComponentFixture<BackButtonComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BackButtonComponentComponent]
    });
    fixture = TestBed.createComponent(BackButtonComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
