import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { MoviesService } from '../../services/movies.service';
import { ItemListComponent } from '../../shared/components/item-list/item-list.component';
import { ListSkeletonLoaderComponent } from '../../shared/components/skeleton-loader/list-skeleton-loader/list-skeleton-loader.component';

@Component({
  selector: 'top-tamil-movies',
  templateUrl: './top-tamil-movies.component.html',
  imports: [
    ItemListComponent,
    NgIf,
    ListSkeletonLoaderComponent
  ],

})
export class TopTamilMoviesComponent implements OnInit {
  title = 'IMDB Top Tamil Movies';
  subtitle = 'As rated by regular IMDB users';
  imdbTopTamilMoviesList: any[] | undefined;

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.getTopTamilMoviesList();
  }

  private getTopTamilMoviesList(): void {
    this.moviesService.getImdbTopTamilMovies().subscribe((movies) => {
      this.imdbTopTamilMoviesList = movies;
    })
  }
}
