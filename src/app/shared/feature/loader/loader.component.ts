import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule, LoadingController } from '@ionic/angular';
import { Subject } from 'rxjs';
import { LoaderService } from '../../data-access/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class LoaderComponent  implements OnInit {
  isLoading$: Subject<boolean> = this.loaderService.isLoading;
  constructor(private loadingCtrl: LoadingController, private loaderService: LoaderService) { }

  ngOnInit() {}

}
