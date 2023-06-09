import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map } from 'rxjs';
import { EventForm } from 'src/app/models/event.interface';
import { EventsService } from './events.service';

@Injectable({
  providedIn: 'root'
})
export class EventsStoreService {

  constructor(private eventService: EventsService, private router: Router) { }
  private readonly _events = new BehaviorSubject<EventForm[]>([])
  readonly events$ = this._events.asObservable();
  readonly pastEvents$ = this.events$.pipe(map(res=> res.filter(event => new Date(event.time).getTime()  < new Date().getTime())))
  readonly upcomingEvents$ = this.events$.pipe(map(res=> res.filter(event => new Date(event.time).getTime()  > new Date().getTime())))
  selectedEvent: any;
  get events(): EventForm[] {
    return this._events.getValue()
  }
  private set events(val: EventForm[]){
    this._events.next(val)
  }

  getEvents(){
    this.eventService.getEvents().subscribe(res=> this.events = res)
  }
  getEventById(id: string){

    if(this.events.length === 0){
      this.eventService.getEvents().subscribe(res=> {
        this.events = res
        this.selectedEvent = this.events.filter(res => id === res._id)
      })
    }else{
      this.selectedEvent = this.events.filter(res => id === res._id)
      console.log(this.selectedEvent)
    }
  }
  createEvent(event: EventForm){
    this.eventService.createEvent(event).subscribe(res => {
      this.events = [...this.events, event]
      console.log(this.events)
      this.router.navigate(['event', 'event-list'])
    })
  }
  deleteEvent(id: string){
    this.eventService.deleteEvent(id).subscribe(res=> {
      console.log("Successfully deleted ", id)
      console.log(res)
      this.router.navigate(['event', 'event-list'])
      this.events = this.events.filter(event => event._id !== id)
    })
  }
}
