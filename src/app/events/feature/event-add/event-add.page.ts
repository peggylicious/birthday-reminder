import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormControl, FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { EventsService } from '../../data-access/events.service';
import { EventForm } from 'src/app/models/event.interface';
import { EventFormComponent } from '../../ui/event-form/event-form.component';
import * as moment from 'moment';
import * as momentz from 'moment-timezone';
@Component({
  selector: 'app-event-add',
  templateUrl: './event-add.page.html',
  styleUrls: ['./event-add.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, EventFormComponent]
})
export class EventAddPage implements OnInit {
  formName: string = 'Create Event';
  allTz: string[] | undefined;
  // alarmTimes:string[] | undefined = ['15 minutes']
  formData:any;
  constructor( private eventService: EventsService) { }

  ngOnInit() {
    this.allTz = this.getTimeZones()
  }

  createEvent(data:EventForm){
    let formData = data
    console.log(formData)
    let datePipe = new DatePipe('en-US')
    // console.log(datePipe.transform(new Date(), 'MM-dd-YYYY hh:mma'))
    formData.time = datePipe.transform(new Date(formData.time.split(' ')[0]), 'MM-dd-YYYY hh:mma')!
    console.log(formData.time)

    this.eventService.createEvent(formData).subscribe(res=>{
      console.log(res)
    })
  }
  getTimeZones() {
    // console.log(momentz.tz.names())
    return momentz.tz.names()
  };
}
