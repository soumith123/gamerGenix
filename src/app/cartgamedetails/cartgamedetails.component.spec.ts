import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartgamedetailsComponent } from './cartgamedetails.component';

describe('CartgamedetailsComponent', () => {
  let component: CartgamedetailsComponent;
  let fixture: ComponentFixture<CartgamedetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartgamedetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartgamedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
