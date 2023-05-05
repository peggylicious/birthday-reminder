import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AuthFormComponent } from '../../ui/auth-form/auth-form.component';
import { AuthService } from '../../data-access/auth.service';
import { User } from 'src/app/models/auth.interface';
import { Router } from '@angular/router';
// import { AuthService } from '../../data-access/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, AuthFormComponent,],
  // providers: [AuthService]
})
export class RegisterPage implements OnInit {
  formName: String = 'register'
  formError: Error = {name: '', message: ''}
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }
  registerUser(data:User){
    console.log(data)
    this.auth.register(data).subscribe({
      next: res => {
        console.log(res)
        this.router.navigate(['login'])
      },
      error: err => {
        this.formError.message = err.error.message
        console.log(err)
      }
    })
  }
  login(){
    this.router.navigate(['login'])
  }
}
