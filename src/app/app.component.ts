import { Component, ViewChild } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { AuthService } from './auth/data-access/auth.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class AppComponent {
  @ViewChild('popover') popover:any;
  isOpen = false;
  showLogOutButton:string|null = localStorage.getItem('access_token');
  isLoggedIn:string|null = localStorage.getItem('access_token');
  showLogInButton:boolean = false;
  showRegisterButton:boolean = false;
  showLoggedOutButton: boolean = false;
  urls = ['/', '/home', '/register', '/login']
  constructor(private authService: AuthService, private router: Router ) {

    router.events.subscribe(res=> {
      if(res instanceof NavigationEnd){
        console.log(this.isLoggedIn)

        if (((res.url === '/home') && !this.isLoggedIn) || ((res.url === '/') && !this.isLoggedIn)){
          console.log("Show button")
          this.showLogInButton = true
          this.showRegisterButton = true
          console.log(this.showLogInButton)
          console.log(this.showRegisterButton)
          this.showLoggedOutButton = false
          console.log("Home or / passed")
          // return 'a'
        }
        if (((res.url === '/login') && !this.isLoggedIn)){
          console.log(res.url)
          this.showLogInButton = false
          this.showRegisterButton = true
          this.showLoggedOutButton = false
          console.log(this.showLogInButton)
          console.log("Login passed")

          // return 'a'
        }
        if (((res.url === '/register') && !this.isLoggedIn)){
          console.log(res.url)
          this.showLogInButton = true
          this.showRegisterButton = false
          this.showLoggedOutButton = false
          console.log("Register passed")
          // return 'a'
        }
        if(!this.urls.includes(res.url)){
          this.showLogInButton = false
          this.showRegisterButton = false
          this.showLoggedOutButton = true
          console.log("Includes one of mosts")
          // return 'a'
        }
        console.log(this.showLogInButton, this.showRegisterButton, this.showLoggedOutButton)
      }
    })
  }


  presentPopover(e: Event) {
    this.popover.event = e;
    this.isOpen = true;
  }
  logOut(){
    this.isOpen = false;
    this.authService.logOut()
    // this.showLogOutButton = null
    this.showLoggedOutButton = false
    this.showLogInButton = true
          this.showRegisterButton = true
    console.log(this.isLoggedIn)

  }

  login(){
    this.router.navigate(['login'])
  }
  register(){
    this.router.navigate(['register'])

  }
  goToHome(){
    this.router.navigate(['/home'])
  }
}
