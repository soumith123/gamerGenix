import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewgamesComponent } from './viewgames.component';

describe('ViewgamesComponent', () => {
  let component: ViewgamesComponent;
  let fixture: ComponentFixture<ViewgamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewgamesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewgamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
