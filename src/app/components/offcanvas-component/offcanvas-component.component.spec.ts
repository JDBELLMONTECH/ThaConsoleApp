import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffcanvasComponentComponent } from './offcanvas-component.component';

describe('OffcanvasComponentComponent', () => {
  let component: OffcanvasComponentComponent;
  let fixture: ComponentFixture<OffcanvasComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OffcanvasComponentComponent]
    });
    fixture = TestBed.createComponent(OffcanvasComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
