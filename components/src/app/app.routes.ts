import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home').then((m) => m.Home),
  },
  {
    path: 'collections',
    loadComponent: () =>
      import('./collections/collections').then((m) => m.Collections),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./collections/tabs/biography/biography').then(
            (m) => m.Biography
          ),
      },
      {
        path: 'companies',
        loadComponent: () =>
          import('./collections/tabs/companies/companies').then(
            (m) => m.Companies
          ),
      },
      {
        path: 'partners',
        loadComponent: () =>
          import('./collections/tabs/partners/partners').then(
            (m) => m.Partners
          ),
      },
    ],
  },
  {
    path: 'elements',
    loadComponent: () => import('./elements/elements').then((m) => m.Elements),
  },
  {
    path: 'modules',
    loadComponent: () => import('./modules/modules').then((m) => m.Modules),
  },
  {
    path: 'views',
    loadComponent: () => import('./views/views').then((m) => m.Views),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./not-found/not-found').then((m) => m.NotFound),
  },
];
