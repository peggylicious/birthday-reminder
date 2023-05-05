import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BehaviorSubject, Subject } from 'rxjs';
import { ErrorModalComponent } from '../feature/error-modal/error-modal.component';

@Injectable({
  providedIn: 'root'
})
export class ErrorDialogService {
  openDialog = new BehaviorSubject<boolean>(false)
  errorHandlerResponse = new BehaviorSubject('');

  // constructor(private modalCtrl: ModalController) { }
  openErrorDialog(res:any){
    this.openDialog.next(true)
    this.errorHandlerResponse.next(res)
  }
  closeErrorDialog(){
    this.openDialog.next(false)
    this.errorHandlerResponse.next('')
  }
}
