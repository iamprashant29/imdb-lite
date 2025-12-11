import { Component, Input } from '@angular/core';
import { Button } from 'primeng/button';
import { Card } from 'primeng/card';
import { Chip } from 'primeng/chip';
import { Image } from 'primeng/image';
import { NgForOf, NgIf } from '@angular/common';
import { Ripple } from 'primeng/ripple';
import { RunningTimePipe } from '../../pipes/running-time.pipe';
import { Tag } from 'primeng/tag';
import { VotesCountPipe } from '../../pipes/votes-count.pipe';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'item-list',
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.scss',
  imports: [
    Button,
    Card,
    Chip,
    Image,
    NgForOf,
    Ripple,
    RunningTimePipe,
    Tag,
    VotesCountPipe,
    NgIf
  ]
})
export class ItemListComponent {
  constructor(private route: ActivatedRoute,
              private router: Router) {}

  @Input() title: string | undefined;

  @Input() subtitle?: string | undefined;

  @Input() itemsList: any[] | undefined;

  viewSelectedMovieDetails(movieId: string): void {
    this.router.navigate([`/details/${movieId}`], { relativeTo: this.route.root }).then();
  }
}
