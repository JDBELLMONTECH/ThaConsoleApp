import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JumbotronComponentComponent } from './jumbotron-component.component';

describe('JumbotronComponentComponent', () => {
  let component: JumbotronComponentComponent;
  let fixture: ComponentFixture<JumbotronComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JumbotronComponentComponent]
    });
    fixture = TestBed.createComponent(JumbotronComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
