import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppoinmentsFormPageRoutingModule } from './appoinments-form-routing.module';

import { AppoinmentsFormPage } from './appoinments-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AppoinmentsFormPageRoutingModule
  ],
  declarations: [AppoinmentsFormPage]
})
export class AppoinmentsFormPageModule {}
