import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { EventsService } from '../../data-access/events.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.page.html',
  styleUrls: ['./event-list.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class EventListPage implements OnInit {
  allEvents:[] = [];
  constructor(private events: EventsService) { }

  ngOnInit() {
    this.events.getEvents().subscribe(res=>{
      console.log(res)
      this.allEvents = res
    })
  }

}
