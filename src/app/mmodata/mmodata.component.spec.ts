import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MmodataComponent } from './mmodata.component';

describe('MmodataComponent', () => {
  let component: MmodataComponent;
  let fixture: ComponentFixture<MmodataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MmodataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MmodataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
