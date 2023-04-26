import { Routes } from '@angular/router';
import { EventsResolverResolver } from '../../utils/events-resolver.resolver';

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
    loadComponent: () => import('../event-list/event-list.page').then( m => m.EventListPage),
    resolve: {
      eventsResolver: EventsResolverResolver
    },
  },
  {
    path: 'add-event',
    loadComponent: () => import('../event-add/event-add.page').then( m => m.EventAddPage)
  },
  {
    path: 'view-event/:id',
    loadComponent: () => import('../event-detail/event-detail.page').then( m => m.EventDetailPage)
  },
];
