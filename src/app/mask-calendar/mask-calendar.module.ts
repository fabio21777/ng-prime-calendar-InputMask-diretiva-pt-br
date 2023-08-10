import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaskCalendarRoutingModule } from './mask-calendar-routing.module';
import { InputMaskModule } from 'primeng/inputmask';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { MaskCalendarInputSecondComponent } from './mask-calendar-input-second/mask-calendar-input-second.component';
import { CalendarWithMaskDirective } from './directive/calendar-with-mask.directive';

@NgModule({
  declarations: [MaskCalendarInputSecondComponent, CalendarWithMaskDirective],
  imports: [
    CommonModule,
    MaskCalendarRoutingModule,
    FormsModule,
    InputMaskModule,
    CalendarModule,
    OverlayPanelModule,
  ],
})
export class MaskCalendarModule {}
