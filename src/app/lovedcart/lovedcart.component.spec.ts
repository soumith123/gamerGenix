import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LovedcartComponent } from './lovedcart.component';

describe('LovedcartComponent', () => {
  let component: LovedcartComponent;
  let fixture: ComponentFixture<LovedcartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LovedcartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LovedcartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
