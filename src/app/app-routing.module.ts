import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstructionPageComponent } from './instruction-page/instruction-page.component';

const routes: Routes = [
  { path: '', component: InstructionPageComponent },
  {
    path: 'components',
    loadChildren: () =>
      import('./mask-calendar/mask-calendar.module').then(
        (m) => m.MaskCalendarModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
