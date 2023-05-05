import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import { BehaviorSubject, Subject } from 'rxjs';
import { CustomErrorHandler } from '../../data-access/custom-error-handler.service';
import { ErrorDialogService } from '../../data-access/error-dialog.service';

@Component({
  selector: 'app-error-modal',
  templateUrl: './error-modal.component.html',
  styleUrls: ['./error-modal.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class ErrorModalComponent  implements OnInit {
  public toastButtons = [
    {
      // text: 'Dismiss',
      role: 'cancel',
      icon: 'close'
    },
  ];
  // isModalOpen: BehaviorSubject<boolean> = this.customErrorHandler.openDialog;
  isModalOpen: boolean = this.errorDialogService.openDialog.getValue();
  errorResponse: any = this.errorDialogService.errorHandlerResponse.getValue();
  name: string = '';

  constructor(private errorDialogService: ErrorDialogService) {}
  ngOnInit() {
    this.errorDialogService.openDialog.subscribe(res=>{
      console.log(res)
      this.isModalOpen = res
    })
    this.errorDialogService.errorHandlerResponse.subscribe(res=>{
      console.log(res)
      this.errorResponse = res
    })
  }


  cancel() {
    this.isModalOpen = false
    // return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    // return this.modalCtrl.dismiss(this.name, 'confirm');
  }


}
