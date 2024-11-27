import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'prefix'
  },
  {
    path: 'home',
    loadComponent: () => import('../app/home/home.component').then(c => c.HomeComponent),
    title: 'DSN Empresas',
  },
];

