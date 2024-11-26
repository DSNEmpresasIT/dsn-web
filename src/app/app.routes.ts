import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'prefix'
  },
  {
    path: 'home',
    loadComponent: () => import('../components/home/digital-vision/digital-vision.component').then(c => c.DigitalVisionComponent),
    title: 'Inicio-DSNEmpresas',
  },
];

