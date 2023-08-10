import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaskCalendarInputComponent } from './mask-calendar-input/mask-calendar-input.component';
import { RouterModule, Routes } from '@angular/router';
import { MaskCalendarInputSecondComponent } from './mask-calendar-input-second/mask-calendar-input-second.component';

const routes: Routes = [
  { path: 'mask-calendar-input', component: MaskCalendarInputComponent },
  {
    path: 'mask-calendar-input-second',
    component: MaskCalendarInputSecondComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaskCalendarRoutingModule {}
