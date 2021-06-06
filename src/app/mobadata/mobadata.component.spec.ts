import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobadataComponent } from './mobadata.component';

describe('MobadataComponent', () => {
  let component: MobadataComponent;
  let fixture: ComponentFixture<MobadataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobadataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobadataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
