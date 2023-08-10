import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaskCalendarInputSecondComponent } from './mask-calendar-input-second.component';

describe('MaskCalendarInputSecondComponent', () => {
  let component: MaskCalendarInputSecondComponent;
  let fixture: ComponentFixture<MaskCalendarInputSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaskCalendarInputSecondComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaskCalendarInputSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
