import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { MoviesService } from '../../services/movies.service';
import { ItemListComponent } from '../../shared/components/item-list/item-list.component';
import { ListSkeletonLoaderComponent } from '../../shared/components/skeleton-loader/list-skeleton-loader/list-skeleton-loader.component';

@Component({
  selector: 'top-hollywood-movies',
  templateUrl: './top-hollywood-movies.component.html',
  imports: [
    ItemListComponent,
    NgIf,
    ListSkeletonLoaderComponent
  ],

})
export class TopHollywoodMoviesComponent implements OnInit {
  title = 'IMDB Top Hollywood Movies';
  subtitle = 'As rated by regular IMDB users';
  imdbTopHollywoodMoviesList: any[] | undefined;

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.getTopHollywoodMoviesList();
  }

  private getTopHollywoodMoviesList(): void {
    this.moviesService.getUSTopBoxOfficeMovies().subscribe((movies) => {
      this.imdbTopHollywoodMoviesList = movies;
    })
  }
}
