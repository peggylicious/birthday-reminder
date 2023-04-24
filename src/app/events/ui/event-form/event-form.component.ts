import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { EventForm } from 'src/app/models/event.interface';
import * as moment from 'moment';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule]
})
export class EventFormComponent  implements OnInit {
  @Input() formName: string = "";
  @Input() allTz: string[] | undefined;
  // @Input() alarmTimes: string[] | undefined = ['15 minutes']
  @Output() onSubmitForm = new EventEmitter();
  myDate:any;
  latestForm:any;
  currentTime: any = new Date();
  eventForm = new FormGroup({
    created_by: new FormControl(localStorage.getItem('reminderUserId')),
    name: new FormControl('', [Validators.required]),
    phoneNumber: new FormControl('', [Validators.required]),
    notification: new FormControl(0, [Validators.required]),
    timeZone: new FormControl('', [Validators.required]),
    time: new FormControl(this.currentTime, [Validators.required]),
    recepient: new FormControl('', [Validators.required])
  })

  constructor() { }

  ngOnInit() {
    console.log(localStorage.getItem('reminderUserId'))
    this.changeDate(new Date().toISOString().split('.')[0])
  }
  changeDate(d:any){
    this.myDate = d
  }
  onSubmit(){
    console.log("Submitting form ...")
    this.latestForm = this.eventForm
    this.latestForm.value.time = this.myDate
    this.onSubmitForm.emit(this.latestForm.value)
  }
  clickMe(){
    console.log(this.eventForm)
  }
}
