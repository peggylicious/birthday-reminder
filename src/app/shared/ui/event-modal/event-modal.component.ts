import { CommonModule } from '@angular/common';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-event-modal',
  templateUrl: './event-modal.component.html',
  styleUrls: ['./event-modal.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule]

})
export class EventModalComponent  implements OnInit {
  @Input() isModalOpen: any;
  @Output() modalIsOpen: EventEmitter<boolean> = new EventEmitter();


  constructor() { }

  ngOnInit() {}
  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
  closeModal(){
    // this.isModalOpen = false;
    this.modalIsOpen.emit(false)
  }
}
