import { Component, ViewChild } from '@angular/core';
import { AnimationController, IonicModule } from '@ionic/angular';
import { AuthService } from './auth/data-access/auth.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { EventsStoreService } from './events/data-access/events-store.service';
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
  enterAnimation = (baseEl: HTMLElement, opts?:any):any => {
    console.log("BaseEl", baseEl)
    console.log("Options", opts)
    var anim = this.animationCtrl.create().addElement(opts.leavingEl).duration(56).iterations(1).easing('ease-out').fromTo('opacity', '1', '0.1').fromTo('transform', 'translateX(0)', 'translateX(100%)')

    return anim
  }
  constructor(private authService: AuthService, private router: Router, private animationCtrl: AnimationController, private eventsStoreService: EventsStoreService ) {}

ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  this.eventsStoreService.getEvents()
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



  goToHome(){
    this.router.navigate(['/home'])
  }
}
