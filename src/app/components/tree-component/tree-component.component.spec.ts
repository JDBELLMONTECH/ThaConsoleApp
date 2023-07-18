import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeComponentComponent } from './tree-component.component';

describe('TreeComponentComponent', () => {
  let component: TreeComponentComponent;
  let fixture: ComponentFixture<TreeComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TreeComponentComponent]
    });
    fixture = TestBed.createComponent(TreeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
