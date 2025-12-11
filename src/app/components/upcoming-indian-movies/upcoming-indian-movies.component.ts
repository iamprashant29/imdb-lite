import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { MoviesService } from '../../services/movies.service';
import { ItemListComponent } from '../../shared/components/item-list/item-list.component';
import { ListSkeletonLoaderComponent } from '../../shared/components/skeleton-loader/list-skeleton-loader.component';

@Component({
  selector: 'upcoming-indian-movies',
  templateUrl: './upcoming-indian-movies.component.html',
  imports: [
    ItemListComponent,
    NgIf,
    ListSkeletonLoaderComponent
  ],

})
export class UpcomingIndianMoviesComponent implements OnInit {
  title = 'Upcoming Indian Movies';
  upcomingIndianMoviesList: any[] | undefined;

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.getUpcomingMovies();
  }

  private getUpcomingMovies(): void {
    this.moviesService.getUpcomingIndianMovies().subscribe((movies) => {
      this.upcomingIndianMoviesList = movies;
    })
  }
}
