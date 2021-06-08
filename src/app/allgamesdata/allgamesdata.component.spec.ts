import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllgamesdataComponent } from './allgamesdata.component';

describe('AllgamesdataComponent', () => {
  let component: AllgamesdataComponent;
  let fixture: ComponentFixture<AllgamesdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllgamesdataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllgamesdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
