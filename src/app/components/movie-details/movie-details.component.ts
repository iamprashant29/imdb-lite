import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ImdbService } from '../../shared/services/imdb.service';
import { ItemListComponent } from '../../shared/components/item-details/item-details.component';
import { NgIf, Location } from '@angular/common';

@Component({
  selector: 'movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
  imports: [
    ItemListComponent,
    NgIf
  ]
})
export class MovieDetailsComponent {
  selectedMovieDetails: any;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private location: Location,
              private imdbService: ImdbService,) {
    this.route.params.subscribe(params => {
      this.getSelectedMovieDetails(params['id']);
    });
  }

  getSelectedMovieDetails(selectedMovieId: string) {
    this.imdbService.getDetailsById(selectedMovieId).subscribe((selectedMovieDetails: any) => {
      this.selectedMovieDetails = selectedMovieDetails;
    });
  }
}
