import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RacingdataComponent } from './racingdata.component';

describe('RacingdataComponent', () => {
  let component: RacingdataComponent;
  let fixture: ComponentFixture<RacingdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RacingdataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RacingdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
