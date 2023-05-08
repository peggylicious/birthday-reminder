import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  isLoading = new BehaviorSubject<boolean>(false)
  loading:any;
  constructor(private loadingCtrl:LoadingController) { }
  show(){
    this.isLoading.next(true)
  }

  hide(){
    this.isLoading.next(false)
  }
}
