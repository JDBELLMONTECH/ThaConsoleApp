import { ComponentFixture, TestBed } from '@angular/core/testing';

import { APIDocumentationLayoutComponent } from './apidocumentation-layout.component';

describe('APIDocumentationLayoutComponent', () => {
  let component: APIDocumentationLayoutComponent;
  let fixture: ComponentFixture<APIDocumentationLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [APIDocumentationLayoutComponent]
    });
    fixture = TestBed.createComponent(APIDocumentationLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
