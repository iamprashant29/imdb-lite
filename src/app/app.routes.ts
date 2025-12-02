import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren:  () =>
      import('./components/imdb.routes').then((x) => x.imdbRoutes),
  }
];
