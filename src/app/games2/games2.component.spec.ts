import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Games2Component } from './games2.component';

describe('Games2Component', () => {
  let component: Games2Component;
  let fixture: ComponentFixture<Games2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Games2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Games2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
