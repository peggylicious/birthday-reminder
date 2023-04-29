import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class HomePage {
  showBtn:boolean = false;
  constructor(private router: Router) {
    router.events.subscribe(res=> {
      if(res instanceof NavigationEnd){
        if(localStorage.getItem('access_token')){
          this.showBtn = false
          console.log(this.showBtn)
        }else{
          this.showBtn = true
        }
        // console.log(this.showLogInButton, this.showRegisterButton, this.showLoggedOutButton)
      }
    })
  }
  register(){
    this.router.navigate(['register'])
  }

  viewBirthdays(){
    this.router.navigate(['event','event-list'])
  }
}
