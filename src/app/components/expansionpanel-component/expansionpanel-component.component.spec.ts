import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpansionpanelComponentComponent } from './expansionpanel-component.component';

describe('ExpansionpanelComponentComponent', () => {
  let component: ExpansionpanelComponentComponent;
  let fixture: ComponentFixture<ExpansionpanelComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpansionpanelComponentComponent]
    });
    fixture = TestBed.createComponent(ExpansionpanelComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
