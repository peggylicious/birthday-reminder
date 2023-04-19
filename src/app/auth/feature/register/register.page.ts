import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AuthFormComponent } from '../../ui/auth-form/auth-form.component';
import { AuthService } from '../../data-access/auth.service';
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

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }
  registerUser(event:any){
    console.log(event)
    this.auth.register(event.value).subscribe(res=>{
      console.log(res)
    })
  }
}
