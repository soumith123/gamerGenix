import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsdataComponent } from './sportsdata.component';

describe('SportsdataComponent', () => {
  let component: SportsdataComponent;
  let fixture: ComponentFixture<SportsdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SportsdataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SportsdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
