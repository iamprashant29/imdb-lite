import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { NgIf } from '@angular/common';
import { ItemListComponent } from '../../shared/components/item-list/item-list.component';

@Component({
  selector: 'top-imdb-tv-shows-list',
  templateUrl: './top-imdb-tv-shows-list.component.html',
  imports: [
    ItemListComponent,
    NgIf
  ],

})
export class TopImdbTvShowsListComponent implements OnInit {
  title = 'IMDB Top 250 TV Shows';
  subtitle = 'As rated by regular IMDB users';
  imdbTopTvShowsList: any[] | undefined;

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.getTopImdbTvShowsList();
  }

  private getTopImdbTvShowsList(): void {
    this.moviesService.getImdbTopTvShows().subscribe((tvShows) => {
      this.imdbTopTvShowsList = tvShows;
    })
  }
}
