import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  isLoading = new Subject<boolean>()
  loading:any;
  constructor(private loadingCtrl:LoadingController) { }
  show(){
    this.isLoading.next(true)
  }

  hide(){
    this.isLoading.next(false)
  }
}
