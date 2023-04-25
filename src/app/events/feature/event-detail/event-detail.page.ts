import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.page.html',
  styleUrls: ['./event-detail.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class EventDetailPage implements OnInit {

  constructor(private route: ActivatedRoute) { }
  routeId: any;
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.routeId= params.get('id');
    });
  }
}
