import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppoinmentsFormPage } from './appoinments-form.page';

const routes: Routes = [
  {
    path: '',
    component: AppoinmentsFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppoinmentsFormPageRoutingModule {}
