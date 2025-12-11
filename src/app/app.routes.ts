import { Routes } from '@angular/router';
import { ViewDetailsComponent } from './components/view-details/view-details.component';

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
  },
  {
    path: 'details/:id',
    component: ViewDetailsComponent
  },
];
