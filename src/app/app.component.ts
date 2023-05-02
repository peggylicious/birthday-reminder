import { Component, ViewChild } from '@angular/core';
import { AnimationController, IonicModule } from '@ionic/angular';
import { AuthService } from './auth/data-access/auth.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { EventsStoreService } from './events/data-access/events-store.service';
import { Observable } from 'rxjs';
import { LoaderComponent } from './shared/feature/loader/loader.component';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, LoaderComponent],
})
export class AppComponent {
  @ViewChild('popover') popover:any;
  isOpen = false;
  showLoggedOutButton: boolean = false;
  urls = ['/', '/home', '/register', '/login']
  enterAnimation = (baseEl: HTMLElement, opts?:any):any => {
    console.log("BaseEl", baseEl)
    console.log("Options", opts)
    var anim = this.animationCtrl.create().addElement(opts.leavingEl).duration(56).iterations(1).easing('ease-out').fromTo('opacity', '1', '0.1').fromTo('transform', 'translateX(0)', 'translateX(100%)')

    return anim
  }
  constructor(private authService: AuthService, private router: Router, private animationCtrl: AnimationController) {

    router.events.subscribe(res=> {
      if(res instanceof NavigationEnd){
        if(localStorage.getItem('access_token')){
          this.showLoggedOutButton = true
          console.log(res)
          console.log(this.showLoggedOutButton)
        }else{
          this.showLoggedOutButton = false
        }
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
    this.showLoggedOutButton = false
  }

  goToHome(){
    this.router.navigate(['/home'])
  }
}
