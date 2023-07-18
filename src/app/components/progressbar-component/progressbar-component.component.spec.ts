import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressbarComponentComponent } from './progressbar-component.component';

describe('ProgressbarComponentComponent', () => {
  let component: ProgressbarComponentComponent;
  let fixture: ComponentFixture<ProgressbarComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProgressbarComponentComponent]
    });
    fixture = TestBed.createComponent(ProgressbarComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
