import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AuthService } from '../auth/data-access/auth.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class HomePage {
  showBtn:boolean = false;
  showButn$: any;
  constructor(private router: Router, private authService:AuthService) {

    router.events.subscribe(res=> {
      if(res instanceof NavigationEnd){
        if(localStorage.getItem('access_token')){
          this.showBtn = false
          console.log(res)
          console.log(this.showBtn)
        }else{
          this.showBtn = true
        }
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
