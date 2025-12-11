import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { MoviesService } from '../../services/movies.service';
import { ItemListComponent } from '../../shared/components/item-list/item-list.component';
import { ListSkeletonLoaderComponent } from '../../shared/components/skeleton-loader/list-skeleton-loader/list-skeleton-loader.component';

@Component({
  selector: 'top-malayalam-movies',
  templateUrl: './top-malayalam-movies.component.html',
  imports: [
    ItemListComponent,
    NgIf,
    ListSkeletonLoaderComponent
  ],

})
export class TopMalayalamMoviesComponent implements OnInit {
  title = 'IMDB Top Malayalam Movies';
  subtitle = 'As rated by regular IMDB users';
  imdbTopMalayalamMoviesList: any[] | undefined;

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.getTopMalayalamMoviesList();
  }

  private getTopMalayalamMoviesList(): void {
    this.moviesService.getImdbMalayalamMovies().subscribe((movies) => {
      this.imdbTopMalayalamMoviesList = movies;
    })
  }
}
