import { ComponentFixture, TestBed } from '@angular/core/testing';

import { APIDocumentationPageComponent } from './apidocumentation-page.component';

describe('APIDocumentationPageComponent', () => {
  let component: APIDocumentationPageComponent;
  let fixture: ComponentFixture<APIDocumentationPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [APIDocumentationPageComponent]
    });
    fixture = TestBed.createComponent(APIDocumentationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
