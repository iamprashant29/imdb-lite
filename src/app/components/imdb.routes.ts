import { Routes } from '@angular/router';
import { TopImdbMoviesListComponent } from './top-imdb-movies-list/top-imdb-movies-list.component';
import { TopImdbTvShowsListComponent } from './top-imdb-tv-shows/top-imdb-tv-shows-list.component';

export const imdbRoutes: Routes = [
  {
    path: '',
    redirectTo: 'imdb-top-250-movies',
    pathMatch: 'full',
  },
  {
    path: 'imdb-top-250-movies',
    component: TopImdbMoviesListComponent
  },
  {
    path: 'imdb-top-250-tv-shows',
    component: TopImdbTvShowsListComponent
  },
  {
    path: '**',
    redirectTo: '',
  }
];
