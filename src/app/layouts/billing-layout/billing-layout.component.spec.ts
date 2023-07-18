import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingLayoutComponent } from './billing-layout.component';

describe('BillingLayoutComponent', () => {
  let component: BillingLayoutComponent;
  let fixture: ComponentFixture<BillingLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BillingLayoutComponent]
    });
    fixture = TestBed.createComponent(BillingLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
