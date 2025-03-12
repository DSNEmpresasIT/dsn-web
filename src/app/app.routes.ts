import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'prefix'
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.component').then(c => c.HomeComponent),
    title: 'DSN Empresas',
  },
  {
    path: 'work',
    loadComponent: () => import('./pages/work/work.component').then(c => c.WorkComponent),
    title: 'DSN Empresas',
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

