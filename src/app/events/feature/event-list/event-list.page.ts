import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { EventsService } from '../../data-access/events.service';
import { EventForm } from 'src/app/models/event.interface';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.page.html',
  styleUrls: ['./event-list.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class EventListPage implements OnInit {
  allEvents: EventForm[] = [];
  upComingEvents: EventForm[] = [];
  pastEvents: EventForm[] = [];
  constructor(private events: EventsService) { }

  ngOnInit() {
    this.events.getEvents().subscribe(res=>{
      console.log(res)
      this.allEvents = res
      this.allEvents.forEach(event => {
        if(new Date(event.time).getTime()  < new Date().getTime()){
          this.pastEvents.push(event)
        }else{
          this.upComingEvents.push(event)
        }
      })
    })
  }

}
