import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { EventForm } from 'src/app/models/event.interface';
import { EventsStoreService } from '../data-access/events-store.service';

@Injectable({
  providedIn: 'root'
})
export class EventsResolverResolver implements Resolve<any> {
  constructor(private eventsStoreService: EventsStoreService){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    // this.eventsStoreService.getEvents()
    console.log("Resolving...", )
    return this.eventsStoreService.getEvents()
  }
}
