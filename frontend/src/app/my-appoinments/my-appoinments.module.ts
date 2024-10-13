import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyAppoinmentsPageRoutingModule } from './my-appoinments-routing.module';

import { MyAppoinmentsPage } from './my-appoinments.page';
import { AppoinmentService } from '../services/appoinment.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    MyAppoinmentsPageRoutingModule
  ],
  declarations: [MyAppoinmentsPage]
})
export class MyAppoinmentsPageModule {}
