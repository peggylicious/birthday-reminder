import { Routes } from '@angular/router';
import { AuthGuard } from './auth/utils/auth.guard';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'event',
    loadChildren: () => import('./events/feature/event-shell/event-shell.routes').then( m => m.routes),
    canActivate: [AuthGuard]
  },
  {
    path: 'register',
    loadComponent: () => import('./auth/feature/register/register.page').then( m => m.RegisterPage)
  },
  {
    path: 'login',
    loadComponent: () => import('./auth/feature/login/login.page').then( m => m.LoginPage)
  },
];
