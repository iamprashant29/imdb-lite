import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { MoviesService } from '../../services/movies.service';
import { ItemListComponent } from '../../shared/components/item-list/item-list.component';
import { ListSkeletonLoaderComponent } from '../../shared/components/skeleton-loader/list-skeleton-loader/list-skeleton-loader.component';

@Component({
  selector: 'top-telugu-movies',
  templateUrl: './top-telugu-movies.component.html',
  imports: [
    ItemListComponent,
    NgIf,
    ListSkeletonLoaderComponent
  ],

})
export class TopTeluguMoviesComponent implements OnInit {
  title = 'IMDB Top Telugu Movies';
  subtitle = 'As rated by regular IMDB users';
  imdbTopTeluguMoviesList: any[] | undefined;

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.getTopTeluguMoviesList();
  }

  private getTopTeluguMoviesList(): void {
    this.moviesService.getImdbTeluguMovies().subscribe((movies) => {
      this.imdbTopTeluguMoviesList = movies;
    })
  }
}
