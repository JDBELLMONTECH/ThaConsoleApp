import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultsLayoutComponent } from './search-results-layout.component';

describe('SearchResultsLayoutComponent', () => {
  let component: SearchResultsLayoutComponent;
  let fixture: ComponentFixture<SearchResultsLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchResultsLayoutComponent]
    });
    fixture = TestBed.createComponent(SearchResultsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
