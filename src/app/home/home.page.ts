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
    console.log(history.state)

    // let a = this.router.getCurrentNavigation().extras.state;
    console.log(this.router.getCurrentNavigation()?.extras.state)
    router.events.subscribe(res=> {
      // console.log(res)
      if(res instanceof NavigationEnd){
        if(localStorage.getItem('access_token')){
          this.showBtn = false
          console.log(res)
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
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.authService.isLoggedOut$.subscribe(res=> {
      console.log(res)
      // this.showBtn = res
    })
    console.log(history.state)
  }
}
