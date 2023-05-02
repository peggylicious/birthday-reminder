import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsPage } from './events.page';
// import { AuthGuard } from './auth/utils/auth.guard';

export const eventsRoutes: Routes = [
  {
    path: '',
    component: EventsPage,
    children: [
      {path: '',
      loadChildren: () => import('./feature/event-shell/event-shell.routes').then( m => m.routes),
    }
    ]
    // loadChildren: () => import('./feature/event-shell/event-shell.routes').then( m => m.routes),
  //   canActivate: [AuthGuard]
  },

];
// @NgModule({
//   imports: [RouterModule.forChild(eventsRoutes)],
//   exports: [RouterModule]
// })
// export class EventsRoutingModule { }
