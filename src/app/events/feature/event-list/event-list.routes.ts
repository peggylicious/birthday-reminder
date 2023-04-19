import { Route } from '@angular/router';

export const ROUTES: Route[] = [
  {path: 'event-list', loadComponent: () => import('./event-list.page').then(mod => mod.EventListPage)},
  // ...
];
