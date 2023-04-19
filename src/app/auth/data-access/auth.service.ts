import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = "http://localhost:3000/user"
  constructor( private http: HttpClient) { }
  register(data: any){
    console.log(data)
    return this.http.post(`${this.baseUrl}/signup`, data)
  }
}
