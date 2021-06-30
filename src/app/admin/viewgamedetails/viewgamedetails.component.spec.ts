import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewgamedetailsComponent } from './viewgamedetails.component';

describe('ViewgamedetailsComponent', () => {
  let component: ViewgamedetailsComponent;
  let fixture: ComponentFixture<ViewgamedetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewgamedetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewgamedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
