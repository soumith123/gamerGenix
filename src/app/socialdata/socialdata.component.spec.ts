import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialdataComponent } from './socialdata.component';

describe('SocialdataComponent', () => {
  let component: SocialdataComponent;
  let fixture: ComponentFixture<SocialdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialdataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
