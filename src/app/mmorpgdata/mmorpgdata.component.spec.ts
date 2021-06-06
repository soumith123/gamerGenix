import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MmorpgdataComponent } from './mmorpgdata.component';

describe('MmorpgdataComponent', () => {
  let component: MmorpgdataComponent;
  let fixture: ComponentFixture<MmorpgdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MmorpgdataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MmorpgdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
