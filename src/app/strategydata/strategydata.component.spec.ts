import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrategydataComponent } from './strategydata.component';

describe('StrategydataComponent', () => {
  let component: StrategydataComponent;
  let fixture: ComponentFixture<StrategydataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StrategydataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StrategydataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
