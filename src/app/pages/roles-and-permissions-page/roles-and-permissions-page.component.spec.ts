import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolesAndPermissionsPageComponent } from './roles-and-permissions-page.component';

describe('RolesAndPermissionsPageComponent', () => {
  let component: RolesAndPermissionsPageComponent;
  let fixture: ComponentFixture<RolesAndPermissionsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RolesAndPermissionsPageComponent]
    });
    fixture = TestBed.createComponent(RolesAndPermissionsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
