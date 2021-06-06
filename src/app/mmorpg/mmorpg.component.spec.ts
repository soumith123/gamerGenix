import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MmorpgComponent } from './mmorpg.component';

describe('MmorpgComponent', () => {
  let component: MmorpgComponent;
  let fixture: ComponentFixture<MmorpgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MmorpgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MmorpgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
