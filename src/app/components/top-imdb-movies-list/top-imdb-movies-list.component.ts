import {Component, OnInit} from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import {Chip} from 'primeng/chip';
import {IconField} from 'primeng/iconfield';
import {Image} from 'primeng/image';
import {InputIcon} from 'primeng/inputicon';
import {InputText} from 'primeng/inputtext';
import {MegaMenuComponent} from '../../shared/components/mega-menu/mega-menu.component';
import {NgForOf, NgIf} from '@angular/common';
import {Ripple} from 'primeng/ripple';
import {Card} from 'primeng/card';
import {Tag} from 'primeng/tag';

@Component({
  selector: 'top-imdb-movies-list',
  templateUrl: './top-imdb-movies-list.component.html',
  styleUrls: ['./top-imdb-movies-list.component.scss'],
  imports: [
    Card,
    Image,
    NgForOf,
    Tag
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
