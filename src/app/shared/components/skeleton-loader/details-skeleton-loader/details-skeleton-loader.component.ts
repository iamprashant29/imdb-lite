import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { Skeleton } from 'primeng/skeleton';

@Component({
  selector: 'details-skeleton-loader',
  templateUrl: './details-skeleton-loader.component.html',
  styleUrls: ['./details-skeleton-loader.component.scss'],
  imports: [
    Skeleton,
    NgForOf
  ],

})
export class DetailsSkeletonLoaderComponent {}
