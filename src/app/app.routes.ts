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
    path: 'work/:id',
    loadComponent: () => import('./pages/work-detail/work-detail.component').then(c => c.WorkDetailComponent),
    title: 'DSN Empresas',
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component').then(c => c.AboutComponent),
    title: 'DSN Empresas',
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

