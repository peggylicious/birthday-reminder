import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BehaviorSubject, Subject } from 'rxjs';
import { ErrorModalComponent } from '../feature/error-modal/error-modal.component';
import { ErrorDialogService } from './error-dialog.service';

@Injectable({
  providedIn: 'root'
})
export class CustomErrorHandler {
  // isError = new Subject<boolean>()
  // openDialog = new BehaviorSubject<boolean>(false)
  isError = new Subject<boolean>()
  message = 'This modal example uses the modalController to present and dismiss modals.';

  // isError:any;
  constructor(private errorDialogService: ErrorDialogService) { }
  handleError(error: any) {
    // do something with the exception
    console.log("From error handler", error)

    // this.errorDialogService.openErrorDialog()

    if (error instanceof HttpErrorResponse) {
      // this.openErrorDialog()
      if(error.status === 404){
        (error.message as any) = "Cannot download page at this time. This may be due to poor network"
      }
      this.errorDialogService.openErrorDialog(error)
      console.log("From error handler", error)
    }
  }

}
