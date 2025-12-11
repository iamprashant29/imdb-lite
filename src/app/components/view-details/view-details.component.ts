import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImdbService } from '../../shared/services/imdb.service';
import { ItemListComponent } from '../../shared/components/item-details/item-details.component';
import { NgIf } from '@angular/common';
import {
  DetailsSkeletonLoaderComponent
} from '../../shared/components/skeleton-loader/details-skeleton-loader/details-skeleton-loader.component';

@Component({
  selector: 'view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.scss'],
  imports: [
    ItemListComponent,
    NgIf,
    DetailsSkeletonLoaderComponent
  ]
})
export class ViewDetailsComponent {
  selectedMovieDetails: any;

  constructor(private route: ActivatedRoute,
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
