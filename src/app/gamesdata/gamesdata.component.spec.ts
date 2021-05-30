import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesdataComponent } from './gamesdata.component';

describe('GamesdataComponent', () => {
  let component: GamesdataComponent;
  let fixture: ComponentFixture<GamesdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamesdataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GamesdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
