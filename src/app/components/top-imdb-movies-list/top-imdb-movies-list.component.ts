import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Chip } from 'primeng/chip';
import { Image} from 'primeng/image';
import { NgForOf } from '@angular/common';
import { Ripple } from 'primeng/ripple';
import { Card } from 'primeng/card';
import { Tag } from 'primeng/tag';
import { RunningTimeComponent } from '../../shared/pipes/running-time.pipe';
import { VotesCountPipe } from '../../shared/pipes/votes-count.pipe';

@Component({
  selector: 'top-imdb-movies-list',
  templateUrl: './top-imdb-movies-list.component.html',
  styleUrls: ['./top-imdb-movies-list.component.scss'],
  imports: [
    Card,
    Image,
    NgForOf,
    Tag,
    RunningTimeComponent,
    Chip,
    Ripple,
    VotesCountPipe
  ],

})
export class TopImdbMoviesListComponent implements OnInit {
  imdbTopMoviesList: any[] = [];

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
