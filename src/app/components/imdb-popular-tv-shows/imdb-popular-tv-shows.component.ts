import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { MoviesService } from '../../services/movies.service';
import { ItemListComponent } from '../../shared/components/item-list/item-list.component';
import { ListSkeletonLoaderComponent } from '../../shared/components/skeleton-loader/list-skeleton-loader/list-skeleton-loader.component';

@Component({
  selector: 'imdb-popular-tv-shows',
  templateUrl: './imdb-popular-tv-shows.component.html',
  imports: [
    ItemListComponent,
    NgIf,
    ListSkeletonLoaderComponent
  ],

})
export class ImdbPopularTvShowsComponent implements OnInit {
  title = 'IMDB Most Popular TV Shows';
  subtitle = 'As rated by regular IMDB users';
  imdbPopularTvShowsList: any[] | undefined;

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.getMostPopularTvShowsList();
  }

  private getMostPopularTvShowsList(): void {
    this.moviesService.getImdbPopularTvShows().subscribe((movies) => {
      this.imdbPopularTvShowsList = movies;
    })
  }
}
