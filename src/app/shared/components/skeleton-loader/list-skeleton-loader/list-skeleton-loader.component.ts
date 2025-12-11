import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { Skeleton } from 'primeng/skeleton';

@Component({
  selector: 'list-skeleton-loader',
  templateUrl: './list-skeleton-loader.component.html',
  styleUrls: ['./list-skeleton-loader.component.scss'],
  imports: [
    Skeleton,
    NgForOf
  ],

})
export class ListSkeletonLoaderComponent {}
