import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { EventsService } from '../../data-access/events.service';
import { EventForm } from 'src/app/models/event.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { EventsStoreService } from '../../data-access/events-store.service';

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
  constructor(private eventsService: EventsService, public eventStoreService: EventsStoreService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.route.snapshot.data)
  }
  viewEvent(id:string){
    // Get id of event from route
    this.router.navigate(['event', 'view-event', id])
  }
  addEvent(){
    this.router.navigate(['event', 'add-event'])
  }
  gotoHome(){
    this.router.navigate(['home'])
  }
}
