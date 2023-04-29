import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { EventForm } from 'src/app/models/event.interface';
import { EventsStoreService } from '../../data-access/events-store.service';
import { EventModalComponent } from 'src/app/shared/ui/event-modal/event-modal.component';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.page.html',
  styleUrls: ['./event-detail.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, EventModalComponent]
})
export class EventDetailPage implements OnInit {

  constructor(private route: ActivatedRoute, private eventsStoreService: EventsStoreService) { }
  routeId: any;
  selectedEvent!: EventForm[];
  openModal: boolean = false;
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.routeId= params.get('id');
      console.log(this.routeId)
      this.getEventById(this.routeId)

    });
  }

  getEventById(id: string){
    this.eventsStoreService.getEventById(id)
    this.selectedEvent = this.eventsStoreService.selectedEvent;
    console.log(this.eventsStoreService.selectedEvent)
  }
  deleteEvent(){
    this.openModal = true
  }
  onDeleteEvent(event:any){
    if(event.save){
    this.eventsStoreService.deleteEvent(this.routeId)
    }
    this.openModal = event.status
  }
}
