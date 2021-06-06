import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FightingdataComponent } from './fightingdata.component';

describe('FightingdataComponent', () => {
  let component: FightingdataComponent;
  let fixture: ComponentFixture<FightingdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FightingdataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FightingdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
