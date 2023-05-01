import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { loggedInUser, User } from 'src/app/models/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // baseUrl = "http://localhost:3000/user"
  baseUrl = "https://birthday-reminder-server-rah7.onrender.com/user"
  // isLoggedIn: boolean = false;
  isLoggedOut: BehaviorSubject<boolean> = new BehaviorSubject(false)
  isLoggedOut$ = this.isLoggedOut.asObservable()
  constructor( private http: HttpClient, private router: Router) { }
  get currentValueOfStateObj(): any {
    return this.isLoggedOut.getValue();
  }
  private set logger(val: boolean){
    this.isLoggedOut.next(val)
  }
  register(data: User){
    console.log(data)
    return this.http.post(`${this.baseUrl}/signup`, data)
  }

  login(data: User){
    console.log(data)
    this.logger = true
    return this.http.post<loggedInUser>(`${this.baseUrl}/login`, data)
  }
  isLoggedIn(){
    let token = localStorage.getItem('reminderToken')
    console.log(token)
    if(!token){
    // this.isLoggedOut.next(true)
    this.logger=true
      return false
    }
    // this.isLoggedOut.next(true)
    this.logger=true

    return true
  }
  logOut(){
    localStorage.removeItem("access_token")
    console.log(localStorage.getItem("access_token"))
    // this.isLoggedOut.next(false)
    this.logger=false
    this.router.navigateByUrl('/home',{state: {showBtn: false}})
  }
}
