import { Component, OnInit } from '@angular/core';
import { AppoinmentService } from '../services/appoinment.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-my-appoinments',
  templateUrl: './my-appoinments.page.html',
  styleUrls: ['./my-appoinments.page.scss'],
})
export class MyAppoinmentsPage implements OnInit {

  appoinments: any = [];

  constructor(private appoinmentService: AppoinmentService,private router: Router) { }

  ngOnInit() {
    this.getAllAppoinments();
  }

   ionViewWillEnter() {
    this.getAllAppoinments();  // Se ejecuta al entrar a la página
  }

  getAllAppoinments(){
    this.appoinmentService.getAppoinments().subscribe(response =>{
      this.appoinments = response;
    })
  }

  deleteAppoinment(id:any){
    this.appoinmentService.delete(id).subscribe(response => {
    })
    this.getAllAppoinments();
  }
  updateAppoinment(id: any){
    this.getAllAppoinments();
    this.router.navigate(["/appoinments-form", id]);
  }

  gotoFirstPage(){
    this.router.navigate(["/home"]);
  }

}

