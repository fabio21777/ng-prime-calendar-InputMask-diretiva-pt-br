import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaskCalendarInputComponent } from './mask-calendar-input.component';

describe('MaskCalendarInputComponent', () => {
  let component: MaskCalendarInputComponent;
  let fixture: ComponentFixture<MaskCalendarInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaskCalendarInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaskCalendarInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
