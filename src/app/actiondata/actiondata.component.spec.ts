import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiondataComponent } from './actiondata.component';

describe('ActiondataComponent', () => {
  let component: ActiondataComponent;
  let fixture: ComponentFixture<ActiondataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiondataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiondataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
