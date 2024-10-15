import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppoinmentService } from '../services/appoinment.service';

@Component({
  selector: 'app-appoinments-form',
  templateUrl: './appoinments-form.page.html',
  styleUrls: ['./appoinments-form.page.scss'],
})
export class AppoinmentsFormPage implements OnInit {
  appoinmentForm: FormGroup;
  appoinmentId: any;

  constructor(public formBuilder: FormBuilder, private appoinmentService: AppoinmentService, private route: Router, private activeRoute: ActivatedRoute) {
    this.appoinmentForm = this.formBuilder.group({
      name: ['', Validators.compose([Validators.required])],
      day: ['', Validators.compose([Validators.required])],
      time: ['', Validators.compose([Validators.required])]
    })
  }

  ngOnInit(): void {
    this.appoinmentId = this.activeRoute.snapshot.paramMap.get('id');
    if (this.appoinmentId !== undefined){
      this.appoinmentService.getAppoinment(this.appoinmentId).subscribe(response =>{
        console.log(response.name)
        console.log(this.appoinmentForm.value.name)
        this.appoinmentForm.setValue({
          name: response.name,
          day: response.day,
          time: response.time
        })
      }, error => {
        console.log("Error: " + error)
      })
    }
  }

  createAppoinment() {
    if (this.appoinmentForm.valid) {
      console.log('Formulario válido:', this.appoinmentForm.value);
      
      // Verifica si existe un appoinmentId para actualizar
      if (this.appoinmentId !== undefined && this.appoinmentId !== null) {
        this.appoinmentService.update(this.appoinmentForm.value, this.appoinmentId).subscribe(
          response => {
            console.log(response);
            
            this.route.navigate(["/my-appoinments"]);
          },
          error => {
            console.log("Error a la hora de modificar el appoinment: " + error);
          }
        );
      } else {
        // Si no hay appoinmentId, creamos una nueva cita
        this.appoinmentService.create(this.appoinmentForm.value).subscribe(
          response => {
            console.log(response);
            this.route.navigateByUrl("/my-appoinments");
          },
          error => {
            console.log("Error a la hora de crear el appoinment: " + error);
          }
        );
      }
    } else {
      // Si el formulario no es válido
      console.log("Formulario inválido, por favor revise los campos.");
    }
  }

  getFormControl(field: string) {
    return this.appoinmentForm.get(field);
  }
  gotoFirstPage(){
    this.route.navigate(["/home"]);
  }

}