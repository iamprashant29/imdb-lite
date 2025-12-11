import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { MoviesService } from '../../services/movies.service';
import { ItemListComponent } from '../../shared/components/item-list/item-list.component';
import { ListSkeletonLoaderComponent } from '../../shared/components/skeleton-loader/list-skeleton-loader/list-skeleton-loader.component';

@Component({
  selector: 'imdb-popular-movies',
  templateUrl: './imdb-popular-movies.component.html',
  imports: [
    ItemListComponent,
    NgIf,
    ListSkeletonLoaderComponent
  ],

})
export class ImdbPopularMoviesComponent implements OnInit {
  title = 'IMDB Most Popular Movies';
  subtitle = 'As rated by regular IMDB users';
  imdbPopularMoviesList: any[] | undefined;

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.getMostPopularMoviesList();
  }

  private getMostPopularMoviesList(): void {
    this.moviesService.getImdbMostPopularMovies().subscribe((movies) => {
      this.imdbPopularMoviesList = movies;
    })
  }
}
