import { Component, } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { Router } from '@angular/router'; 


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}


  title="تجريبي"


  //fuction go to login page
  jump(){
    console.log("You ar click button");

    // this roter used by navigate
    // this.router.navigate(['/login']);

    // this roter used by navigateurl
    this.router.navigateByUrl('login');

  }

}
