import { Routes } from '@angular/router';
import { TopImdbMoviesListComponent } from './top-imdb-movies-list/top-imdb-movies-list.component';

export const imdbRoutes: Routes = [
  {
    path: '',
    redirectTo: 'imdb-top-250',
    pathMatch: 'full',
  },
  {
    path: 'imdb-top-250',
    component: TopImdbMoviesListComponent
  },
  {
    path: '**',
    redirectTo: '',
  }
];
