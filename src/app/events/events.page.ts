import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { EventsStoreService } from './data-access/events-store.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,RouterModule]
})
export class EventsPage implements OnInit {

  constructor(private eventsStoreService: EventsStoreService) { }

  ngOnInit() {
    console.log("From events page")
    this.eventsStoreService.getEvents()
  }

}
