import { Routes } from '@angular/router';

export const routes: Routes = [
  // {
  //   path: 'home',
  //   loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  // },
  // {
  //   path: '',
  //   redirectTo: 'home',
  //   pathMatch: 'full',
  // },
  {
    path: 'event-list',
    loadComponent: () => import('../event-list/event-list.page').then( m => m.EventListPage)
  },
];
