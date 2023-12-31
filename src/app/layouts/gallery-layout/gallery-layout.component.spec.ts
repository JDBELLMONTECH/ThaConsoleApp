import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryLayoutComponent } from './gallery-layout.component';

describe('GalleryLayoutComponent', () => {
  let component: GalleryLayoutComponent;
  let fixture: ComponentFixture<GalleryLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GalleryLayoutComponent]
    });
    fixture = TestBed.createComponent(GalleryLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
