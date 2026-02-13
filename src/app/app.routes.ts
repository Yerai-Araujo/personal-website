import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home-page/home-page').then(m => m.HomePage),
    children: [
      {
        path: 'projects',
        loadComponent: () =>
          import('./components/projects/projects.component').then(m => m.ProjectsComponent),
      },
      {
        path: 'projects/project1',
        loadComponent: () => import('./components/projects/Project1/project1.component').then(m => m.Project1Component),
      },
      {
        path: 'info',
        loadComponent: () => import('./components/info/info.component').then(m => m.InfoComponent),
      },
      { path: '**', redirectTo: 'info' }
    ]
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
