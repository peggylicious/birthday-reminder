import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule]
})
export class AuthFormComponent  implements OnInit {
  @Output() onSubmitForm = new EventEmitter();
  authForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })
  constructor() { }

  ngOnInit() {}
  onSubmit(){
    console.log("Submitting form ...")
    this.onSubmitForm.emit(this.authForm)
  }
}
