import { Component, ViewChild } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { AuthService } from './auth/data-access/auth.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
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
  constructor(private authService: AuthService ) {}


  presentPopover(e: Event) {
    this.popover.event = e;
    this.isOpen = true;
  }
  logOut(){
    this.isOpen = false;
    this.authService.logOut()
    this.showLogOutButton = null

  }
}
