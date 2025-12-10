import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { NgIf } from '@angular/common';
import { ItemListComponent } from '../../shared/components/item-list/item-list.component';
import { ListSkeletonLoaderComponent } from '../../shared/components/skeleton-loader/list-skeleton-loader.component';

@Component({
  selector: 'top-imdb-movies-list',
  templateUrl: './top-imdb-movies-list.component.html',
  imports: [
    ItemListComponent,
    NgIf,
    ListSkeletonLoaderComponent
  ],

})
export class TopImdbMoviesListComponent implements OnInit {
  title = 'IMDB Top 250 movies';
  subtitle = 'As rated by regular IMDB users';
  imdbTopMoviesList: any[] | undefined;

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.getTopImdbMoviesList();
  }

  private getTopImdbMoviesList(): void {
    this.moviesService.getImdbTopMovies().subscribe((movies) => {
      setTimeout(() => {
        this.imdbTopMoviesList = movies;
      }, 1000)
    })
  }
}
