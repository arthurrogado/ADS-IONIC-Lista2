import { Routes } from '@angular/router';
import { RouterLink } from '@angular/router';

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
    path: 'app-inss',
    loadComponent: () => import('./app-inss/app-inss.page').then( m => m.AppInssPage)
  },
  {
    path: 'app-gorjeta',
    loadComponent: () => import('./app-gorjeta/app-gorjeta.page').then( m => m.AppGorjetaPage)
  },
  {
    path: 'app-deposito',
    loadComponent: () => import('./app-deposito/app-deposito.page').then( m => m.AppDepositoPage)
  },
];
