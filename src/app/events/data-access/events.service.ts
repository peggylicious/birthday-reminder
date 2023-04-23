import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EventForm } from 'src/app/models/event.interface';
@Injectable({
  providedIn: 'root'
})
export class EventsService {
  baseUrl = "http://localhost:3000/reminder"
  constructor(private http: HttpClient) { }

  createEvent(data: EventForm){
    return this.http.post<any>(`${this.baseUrl}/create`, data)
  }
  getEvents(){
    console.log("Creating event ...")
    return this.http.get<any>(`${this.baseUrl}/all`)
  }
  deleteMultipleEvents(){
    return this.http.delete<any>(`${this.baseUrl}/delete/all`)
  }
}
