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

  get events(): EventForm[] {
    return this._events.getValue()
  }
  private set events(val: EventForm[]){
    this._events.next(val)
  }

  getEvents(){
    this.eventService.getEvents().subscribe(res=> this.events = res)
  }
  createEvent(event: EventForm){
    this.eventService.createEvent(event).subscribe(res => {
      this.events = [...this.events, event]
      this.router.navigate(['event', 'event-list'])
    })
  }
}
