import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  brand: string = "BH";
  model: string = "star";

  constructor(private router: Router) {}

  gotoMyAppoinments(){
    this.router.navigateByUrl("/my-appoinments");
  }

  goToNewAppoinment(){
    this.router.navigateByUrl("/appoinments-form");
  }

}
