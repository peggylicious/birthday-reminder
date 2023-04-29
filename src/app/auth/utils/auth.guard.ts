import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../data-access/auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private jwtHelper: JwtHelperService, private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      // if(!this.auth.isLoggedIn()){
      //   console.log("Not logged in")
      //   return false
      // }
      console.log("Logged in")
      const token = localStorage.getItem("access_token");
      if(token && !this.jwtHelper.isTokenExpired(token)){
        console.log(this.jwtHelper.isTokenExpired(token))
        return true
      }
      this.router.navigateByUrl("/login");
      return false;
  }

}
