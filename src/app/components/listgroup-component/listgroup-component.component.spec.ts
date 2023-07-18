import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListgroupComponentComponent } from './listgroup-component.component';

describe('ListgroupComponentComponent', () => {
  let component: ListgroupComponentComponent;
  let fixture: ComponentFixture<ListgroupComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListgroupComponentComponent]
    });
    fixture = TestBed.createComponent(ListgroupComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
