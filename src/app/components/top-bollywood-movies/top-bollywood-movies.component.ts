import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { MoviesService } from '../../services/movies.service';
import { ItemListComponent } from '../../shared/components/item-list/item-list.component';
import { ListSkeletonLoaderComponent } from '../../shared/components/skeleton-loader/list-skeleton-loader.component';

@Component({
  selector: 'top-bollywood-movies',
  templateUrl: './top-bollywood-movies.component.html',
  imports: [
    ItemListComponent,
    NgIf,
    ListSkeletonLoaderComponent
  ],

})
export class TopBollywoodMoviesComponent implements OnInit {
  title = 'IMDB Top Bollywood Movies';
  subtitle = 'As rated by regular IMDB users';
  imdbTopBollywoodMoviesList: any[] | undefined;

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.getTopBollywoodMoviesList();
  }

  private getTopBollywoodMoviesList(): void {
    this.moviesService.getImdbTopBollywoodMovies().subscribe((movies) => {
      this.imdbTopBollywoodMoviesList = movies;
    })
  }
}
