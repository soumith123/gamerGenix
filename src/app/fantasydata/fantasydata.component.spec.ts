import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FantasydataComponent } from './fantasydata.component';

describe('FantasydataComponent', () => {
  let component: FantasydataComponent;
  let fixture: ComponentFixture<FantasydataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FantasydataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FantasydataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
