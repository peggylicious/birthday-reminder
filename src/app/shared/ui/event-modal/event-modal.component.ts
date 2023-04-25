import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
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
  isModalOpen = false;


  constructor() { }

  ngOnInit() {}
  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
}
