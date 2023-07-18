import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbComponentComponent } from './breadcrumb-component.component';

describe('BreadcrumbComponentComponent', () => {
  let component: BreadcrumbComponentComponent;
  let fixture: ComponentFixture<BreadcrumbComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BreadcrumbComponentComponent]
    });
    fixture = TestBed.createComponent(BreadcrumbComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
