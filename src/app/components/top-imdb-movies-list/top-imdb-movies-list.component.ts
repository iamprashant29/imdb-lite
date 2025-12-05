import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { NgIf } from '@angular/common';
import { ItemListComponent } from '../../shared/components/item-list/item-list.component';

@Component({
  selector: 'top-imdb-movies-list',
  templateUrl: './top-imdb-movies-list.component.html',
  styleUrls: ['./top-imdb-movies-list.component.scss'],
  imports: [
    ItemListComponent,
    NgIf
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
      this.imdbTopMoviesList = movies;
      console.log(this.imdbTopMoviesList);
    })
  }
}
