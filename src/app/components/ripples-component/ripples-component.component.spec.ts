import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RipplesComponentComponent } from './ripples-component.component';

describe('RipplesComponentComponent', () => {
  let component: RipplesComponentComponent;
  let fixture: ComponentFixture<RipplesComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RipplesComponentComponent]
    });
    fixture = TestBed.createComponent(RipplesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
