import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShootingdataComponent } from './shootingdata.component';

describe('ShootingdataComponent', () => {
  let component: ShootingdataComponent;
  let fixture: ComponentFixture<ShootingdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShootingdataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShootingdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
