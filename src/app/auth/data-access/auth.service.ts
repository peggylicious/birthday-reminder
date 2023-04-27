import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { loggedInUser, User } from 'src/app/models/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = "http://localhost:3000/user"
  // isLoggedIn: boolean = false;
  constructor( private http: HttpClient, private router: Router) { }
  register(data: User){
    console.log(data)
    return this.http.post(`${this.baseUrl}/signup`, data)
  }

  login(data: User){
    console.log(data)
    return this.http.post<loggedInUser>(`${this.baseUrl}/login`, data)
  }
  isLoggedIn(){
    let token = localStorage.getItem('reminderToken')
    console.log(token)
    if(!token){
      return false
    }
    return true
  }
  logOut(){
    localStorage.removeItem("access_token")
    this.router.navigate([''])
  }
}
