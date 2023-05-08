import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule]
})
export class AuthFormComponent  implements OnInit {
  @Input() formName: String = "";
  @Output() onSubmitForm = new EventEmitter();

  validPattern: any = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  authForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.minLength(4), Validators.pattern(this.validPattern)]),
    password: new FormControl('', [Validators.required])
  })
  constructor() { }

  ngOnInit() {}
  onSubmit(){
    console.log("Submitting form ...")
    this.onSubmitForm.emit(this.authForm.value)
  }

  get emailError() {
    // if(this.authForm.get('email')?.errors?.['minlength']){
    //   return "You have entered less than 4 characters"
    // }
    if(this.authForm.get('email')?.errors?.['pattern']){
      return "You have entered an invalid email"
    }
    return

  }

}
