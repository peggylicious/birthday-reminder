import { CommonModule } from '@angular/common';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { EventForm } from 'src/app/models/event.interface';

@Component({
  selector: 'app-event-modal',
  templateUrl: './event-modal.component.html',
  styleUrls: ['./event-modal.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule]

})
export class EventModalComponent  implements OnInit {
  @Input() isModalOpen: any;
  @Input() selectedEvent: any = {}
  @Output() modalIsOpen: EventEmitter<{status:boolean, save:boolean}> = new EventEmitter();


  constructor() { }

  ngOnInit() {}
  setOpen(state: {status:boolean, save: boolean}) {
    this.isModalOpen = state.status;
  }
  confirmModal(){
    // this.isModalOpen = false;
    this.modalIsOpen.emit({status:false, save: true})
  }
  closeModal(){
    this.modalIsOpen.emit({status:false, save: false})

  }
}
