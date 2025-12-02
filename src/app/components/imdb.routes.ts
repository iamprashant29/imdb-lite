import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const imdbRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: '**',
    redirectTo: '',
  }
];
