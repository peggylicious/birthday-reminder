import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AuthFormComponent } from '../../ui/auth-form/auth-form.component';
import { AuthService } from '../../data-access/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, AuthFormComponent]
})
export class LoginPage implements OnInit {
  formName: String = 'login'
  constructor(private auth: AuthService) { }

  ngOnInit() {
  }
  loginUser(event:any){
    console.log(event)
    this.auth.login(event.value).subscribe(res=>{
      console.log(res)
    })
  }

}
