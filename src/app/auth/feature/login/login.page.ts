import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AuthFormComponent } from '../../ui/auth-form/auth-form.component';
import { AuthService } from '../../data-access/auth.service';
import { User } from 'src/app/models/auth.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, AuthFormComponent]
})
export class LoginPage implements OnInit {
  formName: String = 'login'
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }
  loginUser(data:User){
    console.log(data)
    this.auth.login(data).subscribe(res=>{
      localStorage.setItem('access_token', res.token)
      localStorage.setItem('reminderUserId', res.loggedUserId)
      console.log(res)
      this.router.navigate(["event/event-list"]);
    })
  }

}
