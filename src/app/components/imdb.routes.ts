import { Routes } from '@angular/router';
import { TopImdbMoviesListComponent } from './top-imdb-movies-list/top-imdb-movies-list.component';
import { TopImdbTvShowsListComponent } from './top-imdb-tv-shows/top-imdb-tv-shows-list.component';
import { ImdbPopularMoviesComponent } from './imdb-popular-movies/imdb-popular-movies.component';
import { TopBollywoodMoviesComponent } from './top-bollywood-movies/top-bollywood-movies.component';
import { ImdbPopularTvShowsComponent } from './imdb-popular-tv-shows/imdb-popular-tv-shows.component';
import { TopHollywoodMoviesComponent } from './top-hollywood-movies/top-hollywood-movies.component';
import { TopTamilMoviesComponent } from './top-tamil-movies/top-tamil-movies.component';
import { TopTeluguMoviesComponent } from './top-telugu-movies/top-telugu-movies.component';
import { TopMalayalamMoviesComponent } from './top-malayalam-movies/top-malayalam-movies.component';
import { UpcomingIndianMoviesComponent } from './upcoming-indian-movies/upcoming-indian-movies.component';

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
    path: 'most-popular-movies',
    component: ImdbPopularMoviesComponent
  },
  {
    path: 'top-box-office',
    component: TopHollywoodMoviesComponent
  },
  {
    path: 'top-bollywood-movies',
    component: TopBollywoodMoviesComponent
  },
  {
    path: 'upcoming-indian-movies',
    component: UpcomingIndianMoviesComponent
  },
  {
    path: 'top-rated-tamil-movies',
    component: TopTamilMoviesComponent
  },
  {
    path: 'top-rated-telugu-movies',
    component: TopTeluguMoviesComponent
  },
  {
    path: 'top-rated-malayalam-movies',
    component: TopMalayalamMoviesComponent
  },
  {
    path: 'imdb-top-250-tv-shows',
    component: TopImdbTvShowsListComponent
  },
  {
    path: 'most-popular-tv',
    component: ImdbPopularTvShowsComponent
  },
  {
    path: '**',
    redirectTo: '',
  }
];
